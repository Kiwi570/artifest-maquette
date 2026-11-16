/* Parcours propres à Artifest : composeur de budget (total = somme des lignes, jamais au-dessus du budget),
   panier (ajout, compteur, deux onglets, donnée abîmée), filtres de la boutique, recherche, aperçu rapide. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('1366×768') });
  try {
    /* Composeur de l'accueil. */
    await page.goto(BASE + '/', { waitUntil: 'load' });
    await attendrePret(page);
    for (const occ of ['mariage', 'anniversaire', 'bapteme', 'nouvelan']) {
      for (const budget of [40, 150, 400]) {
        await page.evaluate(({ occ, budget }) => {
          const r = document.querySelector(`input[name="occasion"][value="${occ}"]`); r.checked = true; r.dispatchEvent(new Event('change', { bubbles: true }));
          const b = document.querySelector('[data-budget]'); b.value = budget; b.dispatchEvent(new Event('input', { bubbles: true }));
        }, { occ, budget });
        await attendre(900);
        const { somme, affiche, n } = await page.evaluate(() => {
          const lignes = [...document.querySelectorAll('[data-composeur-liste] .prix-ligne')].map((e) => parseFloat(e.textContent.replace(/[^\d,]/g, '').replace(',', '.')));
          const t = parseFloat(document.querySelector('[data-composeur-total]').textContent.replace(/[^\d,]/g, '').replace(',', '.'));
          return { somme: lignes.reduce((a, b) => a + b, 0), affiche: t, n: lignes.length };
        });
        if (Math.abs(somme - affiche) > 0.01) R.echec('composeur', `${occ} ${budget} € : total ${affiche} au lieu de ${somme}`, { page: '/' });
        if (somme > budget + 0.001) R.echec('composeur', `${occ} ${budget} € : sélection de ${somme} €, au-dessus du budget`, { page: '/' });
        if (budget >= 150 && n < 2) R.regarder('composeur', `${occ} ${budget} € : seulement ${n} article(s)`, { page: '/' });
      }
    }

    /* Panier : ajout depuis la boutique, compteur, deuxième onglet, donnée abîmée. */
    await page.goto(BASE + '/boutique', { waitUntil: 'load' });
    await attendrePret(page);
    await page.evaluate(() => localStorage.removeItem('artifest-panier'));
    await page.locator('[data-grille] [data-panier-ajouter]').first().click();
    await attendre(1500);
    const compte = await page.evaluate(() => document.querySelector('[data-entete] [data-panier-compte]')?.textContent.trim());
    if (compte !== '1') R.echec('panier', `compteur de l’en-tête à « ${compte} » après un ajout`, { page: '/boutique' });
    const autre = await ctx.newPage();
    await autre.goto(BASE + '/contact', { waitUntil: 'load' });
    await attendrePret(autre);
    const compte2 = await autre.evaluate(() => document.querySelector('[data-entete] [data-panier-compte]')?.textContent.trim());
    if (compte2 !== '1') R.echec('panier', `deuxième onglet : compteur à « ${compte2} »`, { page: '/contact' });
    await autre.close();
    await page.evaluate(() => localStorage.setItem('artifest-panier', '{abîmé'));
    await page.reload({ waitUntil: 'load' });
    if ((await attendrePret(page)) === 'jamais-pret') R.echec('panier', 'une donnée abîmée bloque le site', { page: '/boutique' });

    /* Filtres : un rayon, puis le budget ; le nombre affiché égale les fiches visibles. */
    await page.locator('[data-filtre-groupe="rayon"] [data-valeur="fumigenes"]').click();
    await attendre(1200);
    const f = await page.evaluate(() => ({ vis: [...document.querySelectorAll('[data-grille] .cff__fiche')].filter((x) => !x.hidden).length, aff: +document.querySelector('[data-compte]').textContent }));
    if (f.vis !== f.aff || f.vis === 0) R.echec('filtres', `fumigènes : ${f.vis} fiches visibles, ${f.aff} annoncées`, { page: '/boutique' });

    /* Recherche : accents et majuscules ignorés. */
    await page.locator('[data-reinit]').first().click();
    await attendre(900);
    await page.fill('[data-recherche]', 'FUMIGENE');
    await attendre(500);
    const r = await page.evaluate(() => [...document.querySelectorAll('[data-grille] .cff__fiche')].filter((x) => !x.hidden && !x.classList.contains('hors-recherche')).length);
    if (r < 3) R.echec('recherche', `« FUMIGENE » ne trouve que ${r} article(s)`, { page: '/boutique' });

    /* Aperçu rapide : s'ouvre, se ferme avec Échap. */
    await page.fill('[data-recherche]', '');
    await page.locator('[data-apercu-ouvrir]').first().click();
    await attendre(400);
    if (!(await page.evaluate(() => document.querySelector('[data-apercu]').open))) R.echec('apercu', 'l’aperçu rapide ne s’ouvre pas', { page: '/boutique' });
    await page.keyboard.press('Escape');
    await attendre(300);
    if (await page.evaluate(() => document.querySelector('[data-apercu]').open)) R.echec('apercu', 'Échap ne ferme pas l’aperçu', { page: '/boutique' });
  } finally { await ctx.close(); }
}
