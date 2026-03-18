# SYSTEM INSTRUCTIONS: Project "Harlot Piercings" Full Website Generation
**Objective:** Generate a fully responsive, single-page application (or multi-section HTML/CSS/JS) for a solo-operated, premium piercing studio named "Harlot Piercings."

## 1. Aesthetic & Art Direction
**Vibe:** Medieval Armory, Witch Cult, Pre-Raphaelite Grimdark, Gothic Decadence.
**Visual Pillars (CRITICAL INSTRUCTIONS FOR AI GENERATION):**
* **The Background:** The primary background must evoke shining silver—think polished broadswords, woven chainmail, or a gleaming scrying mirror. Use metallic CSS gradients or subtle chainmail texture overlays (`mix-blend-mode: overlay`).
* **Motifs & Imagery:** The UI and background assets must heavily feature: 
  * Chiaroscuro candlelight reflecting off silver.
  * Flails (three-headed morningstars) and broadswords used as visual dividers or background silhouettes.
  * Medieval witch accessories (grimoires, alchemical vials, heavy ornate keys).
  * Marginalia-style medieval cats integrated into the layout (e.g., creeping around the footer or sitting on top of content cards).
  * Characters/Models (if images are generated/used) wearing Hennins (tall medieval cone hats) and heavy chainmail.
* **Tone:** Unapologetic, slightly menacing, but highly opulent. 

## 2. Global Color Palette
Because the background is shining silver, the text and accents MUST be dark to ensure high-contrast readability. Implement these exact variables:
* `--bg-silver`: `linear-gradient(135deg, #e0e5ec 0%, #bfcae0 50%, #a3b1c6 100%)` (Shining, metallic steel background).
* `--text-void`: `#080809` (Pitch black. Primary body text).
* `--accent-purple`: `#1F0A2A` (Bruised, dark velvet purple. Use for heavy borders, button backgrounds, and strong contrast elements).
* `--accent-gold`: `#B8963D` (Antique gold. Use for gothic embellishments, hover states, and iconography).
* `--blood-red`: `#5A0A18` (Dried, dark red. Use for warnings, hyperlinked text, and call-to-action buttons).

## 3. Typography
Import from Google Fonts. 
* **Headers (`H1`, `H2`, `H3`):** Use a hardcore Gothic/Blackletter font like `UnifrakturMaguntia` or `Pirata One`. Must look like a medieval manuscript.
* **Body Text (`p`, `span`, `li`):** `Cormorant Garamond` or `Cinzel`. Keep it heavily serifed but legible against the bright silver.

## 4. UI Components & CSS Behaviors
* **Containers/Cards:** To stand out against the silver, content cards should be dark. Use `--accent-purple` at `rgba(31, 10, 42, 0.85)` with a 1px solid `--accent-gold` border. Text inside these cards must revert to a light color (like `#E5E7EB`) for readability.
* **Dividers:** Do not use standard `<hr>`. Style dividers to look like lying broadswords or chains. 
* **Buttons:** Background `--blood-red`, text gold. Add a sharp, brutalist `box-shadow` instead of a soft blur to mimic struck metal.

## 5. Website Architecture & Copywriting Directives
Generate the full layout with the following sections and placeholder copy:

### Section 1: The Vanguard (Hero)
* **Visual:** Full viewport height. Shining chainmail background obscured by heavy shadows at the edges, lit by dozens of flickering candles.
* **H1:** "Harlot Piercings" (Massive, gothic font).
* **Subtext:** "Adorn the Flesh. Defy the Tether."
* **CTA Button:** "Book Your Confession."

### Section 2: The Armory (Services)
* A grid layout detailing modifications. Style the cards to look like pages from a grimoire.
* *Card 1: Visage.* Precise facial architecture. Mention placements like the eyebrow, asymmetrical side lip modifications, and heavy septum hardware.
* *Card 2: The Aural Curations.* Intricate ear projects, chainmail drapes, and industrial scaffolding.
* *Card 3: Flesh Bound.* Surface anchors, dermals, and the art of antigravity modifications.

### Section 3: The Fleshmancer (About)
* Emphasize this is a solitary practitioner, not a clinic. 
* **Visual:** An image container framed by a gothic arch, perhaps featuring a medieval cat sitting next to an alchemist's mortar and pestle.
* **Copy:** Focus on the solitary dedication to the craft, bridging the gap between anatomy and alchemy. 

### Section 4: The Ritual (Aftercare)
* Use a dark, heavily styled container. 
* **Copy:** Healing is not passive; it is a medieval ordeal. The body will fight the intrusion. Keep the wound pristine with saline, avoid harsh alchemical compounds, and protect the jewelry like a sacred relic.

### Section 5: The Ledger (Footer/Contact)
* **Visual:** Bordered by three-headed morningstars. 
* Include a minimalist booking form (Name, Modification Desired, Date of Confession).
* Include studio coordinates and social links.