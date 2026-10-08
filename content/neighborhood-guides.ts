export type NeighborhoodGuide = {
  slug: string; neighborhood: string; title: string; description: string;
  photo: string; photoAlt: string; photoCaption: string; intro: string[]; takeaway: string;
  sections: { id: string; title: string; paragraphs: string[]; checklist?: string[]; links?: { label: string; href: string }[] }[];
  illustration: { src: string; alt: string; caption: string; after: number; portrait?: boolean };
  brief: { service: string; scope: string; photos: string[] };
}

export const neighborhoodGuides: NeighborhoodGuide[] = [
  {
    slug: 'gowanus-shower-glass-patterned-tile', neighborhood: 'Gowanus · Brooklyn',
    title: 'Where should the glass meet your Gowanus shower tile?',
    description: 'Plan shower glass around patterned tile, the finished curb and hardware positions. A Gowanus homeowner’s brief, with a real MetroGlass Pro work photo.',
    photo: '/gallery/edison-nj-clear-tempered-shower-door-angle.jpg',
    photoAlt: 'Clear corner shower enclosure with brass-colored hinges beside vertically striped brown tile and a pale curb.',
    photoCaption: 'MetroGlass Pro project photograph from Edison, New Jersey. The striped wall, clear corner and curb are visible here; this is not a Gowanus installation.',
    intro: [
      'You chose the tile for its rhythm. Now a hinge, a glass edge and a handle have to share that wall. Before choosing the smallest-looking hardware, decide what line you want to see when you stand at the bathroom door.',
      'In this MetroGlass Pro photograph, the clear corner lets the vertically striped wall remain visible. The brass-colored fittings introduce another set of edges. For a Gowanus bathroom renovation, it is a useful way to think about the meeting of two trades: the tile establishes the finished opening, and the glass has to fit that opening without treating the pattern as an afterthought.',
    ],
    takeaway: 'Choose the visual line early. Confirm the glass size against the finished room.',
    sections: [
      { id: 'tile-line', title: 'Look at the wall from the doorway', paragraphs: [
        'Stand where you will usually enter the room, rather than directly in front of the shower. In the photograph, a corner edge of glass runs in front of the striped wall. The glass does not hide the pattern, but reflections and fittings still become part of the composition. Ask whether your preferred panel line belongs beside a tile joint, within a quiet area, or at an intentional change in material.',
        'A design drawing can show that intention before the tile is complete. Keep it separate from the fabrication drawing. If the tile thickness, wall edge or curb finish changes, the intended line needs another look. A visually tidy location also needs suitable support for the selected fittings; an attractive joint alone does not establish an attachment point.',
      ], links: [{ label: 'Discuss glass with your architect or designer', href: '/projects/shower-glass-design-consultation-nyc/' }] },
      { id: 'finished-opening', title: 'Name every surface the glass will meet', paragraphs: [
        'Follow the enclosure from the wall, across the curb, to the corner. Which surfaces are finished, and which are still waiting for an edge piece or adjustment? The raised pale curb in the photograph makes the lower boundary especially clear. Your room may have a different threshold, so send a close view as well as the whole shower.',
        'Basco’s measuring guide calls for measurement after the finished wall material is in place. It also distinguishes widths at different positions and records the showerhead location. Those are useful reasons to show more than one opening width in an early brief. They do not turn a homeowner’s measurements into fabrication dimensions for a custom enclosure.',
      ], links: [{ label: 'Basco: finished-opening measuring guide (PDF)', href: 'https://s3.amazonaws.com/assets.bascoshowerdoor.com/documents/measuring-guide.pdf' }, { label: 'More on measurement after tile', href: '/blog/finished-tile-shower-glass-measurement-manhattan/' }] },
      { id: 'hardware-view', title: 'Compare the fittings in the same view as the tile', paragraphs: [
        'The hinge plates and handle in this photo have a different visual weight from the slim glass edge. Compare your proposed finish with the faucet and the tile in the room’s actual light. A cropped product image can make a fitting appear smaller or warmer than it will beside the wall.',
        'Ask the estimator to identify the proposed layout and hardware family, the attachment surfaces to review, and the remaining decisions before final measurement. Changes to a hinge or panel arrangement can affect glass preparation. Resolve those decisions before an order is treated as ready to fabricate.',
      ], checklist: ['A full-room photo from the doorway.', 'Close views of the finished curb and both glass-to-wall boundaries.', 'Tile and fitting selections, plus a note of anything still changing.'], links: [{ label: 'Custom shower door installation', href: '/shower-door-installation-nyc/' }, { label: 'See the documented Edison project', href: '/blog/edison-nj-clear-tempered-shower-door-bathroom-renovation/' }] },
      { id: 'scope', title: 'Keep the glass proposal and tile handoff connected', paragraphs: [
        'Tell MetroGlass Pro who is finishing the tile and whether the room is ready for a site review. Ask which removal, surface preparation, fittings and sealing work the glass proposal includes, and which remaining surfaces belong to the renovation contractor. A photograph cannot establish the concealed waterproofing or backing.',
        'If the larger renovation is changing plumbing, electrical work or the room itself, review that scope with the responsible professional. NYC DOB explains that renovation requirements depend on the proposed work. The neighborhood name does not settle that question. The useful next step is a glass-specific brief with the current finish state, rather than a promise based on a tile mood board.',
      ], links: [{ label: 'NYC DOB: kitchen and bathroom renovation scope', href: 'https://www.nyc.gov/site/buildings/property-or-business-owner/renovating-kitchens-bathrooms.page' }, { label: 'Browse real work and labeled planning examples', href: '/gallery/' }] },
    ],
    illustration: { src: '/editorial/neighborhoods/gowanus-tile-glass.png', alt: 'Conceptual shower corner showing clear glass meeting a vertically patterned tile wall and pale curb.', caption: 'Original planning illustration. The panel line is a design question, not a measured Gowanus room or an attachment specification.', after: 1 },
    brief: { service: 'Frameless Shower Door', scope: 'Gowanus shower glass: tile pattern, panel line, finished curb and hardware coordination.', photos: ['The room from the doorway', 'The finished curb and wall boundaries', 'Tile or hardware selections and unfinished items'] },
  },
  {
    slug: 'financial-district-shower-door-movement', neighborhood: 'Financial District · Manhattan',
    title: 'A FiDi shower door needs room to open, not just room to fit.',
    description: 'Compare sliding and swing shower-door movement in a Financial District apartment, including nearby fixtures, usable entry and building access.',
    photo: '/gallery/84-clinton-after-preview.jpg',
    photoAlt: 'Sliding shower enclosure with an overhead rail, round rollers and long horizontal handles in front of gray wall tile.',
    photoCaption: 'MetroGlass Pro’s documented 84 Clinton project in the Lower East Side, Manhattan. It illustrates sliding movement; it is not a Financial District job.',
    intro: [
      'The glass fits between the walls. That still leaves a second question: where will you stand while opening it? In a compact bathroom, the space beside the shower can disappear into a vanity corner, a toilet or the room door.',
      'For a Financial District apartment owner choosing new shower glass, start with the entry you will actually use. MetroGlass Pro’s 84 Clinton photo shows overhead sliding hardware and horizontal handles. Sliding motion avoids a hinged arc into the room, but the overlap of the panels and the handle positions still determine the usable entry. The photograph is a comparison point, not proof that this layout suits your apartment.',
    ],
    takeaway: 'Compare the usable entry and your standing space before comparing the hardware finish.',
    sections: [
      { id: 'entry', title: 'Draw the person’s route before the door’s route', paragraphs: [
        'Take a photo from the bathroom doorway with the shower and neighboring fixtures in the same frame. Mark which side you naturally approach. If you reach across the vanity to operate a handle, or step around the toilet to enter, the nominal opening width tells only part of the story.',
        'Describe who uses the room and what they need from the entry. Do not infer accessibility from a photo or a large-looking glass opening. A particular access need requires review of the whole route, threshold and proposed arrangement. The first comparison is practical: where do you stand, reach and step?',
      ], links: [{ label: 'View the 84 Clinton before-and-after project', href: '/projects/84-clinton-lower-east-side-shower-door-before-after/' }] },
      { id: 'movement', title: 'Sliding and swing layouts ask different questions', paragraphs: [
        'A swing door needs an assessed movement area, including the handle’s reach and nearby fixtures. A sliding arrangement needs enough panel travel and a useful opening when the movable panel overlaps the other glass. In the 84 Clinton photograph, the long handles and rail are clearly part of the layout; they are not incidental decoration.',
        'Ask to see the proposed door movement on a simple plan of your room. Include the bathroom door and cabinet drawers in that plan. Compare the entry in use, not only the enclosure with every door closed. Neither arrangement wins on the basis of a Financial District address; the room and the chosen system decide.',
      ], checklist: ['Swing: what lies within the proposed door and handle movement?', 'Sliding: which side opens, and what usable entry remains?', 'Both: can the room door and nearby storage operate as intended?'], links: [{ label: 'Single swing layout guide', href: '/projects/single-swing-door-nyc/' }, { label: 'Sliding layout guide', href: '/projects/sliding-bypass-doors-nyc/' }] },
      { id: 'dimensions', title: 'Keep rough photos separate from the final measure', paragraphs: [
        'For the first discussion, rough room dimensions and clear photos help identify layouts worth reviewing. Say whether the curb and tile are finished. Basco’s measuring guide records multiple opening measurements and the showerhead position after wall finishes are in place. That supports a full opening record rather than one dimension copied from an old door.',
        'A final custom-glass order also depends on the selected hardware and assessed mounting conditions. Ask what must be settled before field measurement and who confirms the drawing. If the room is still being renovated, name the surfaces that are changing so a promising layout is not mistaken for an approved fabrication size.',
      ], links: [{ label: 'Basco: measuring guide (PDF)', href: 'https://s3.amazonaws.com/assets.bascoshowerdoor.com/documents/measuring-guide.pdf' }, { label: 'Shower door replacement planning', href: '/shower-door-replacement-nyc/' }] },
      { id: 'access', title: 'Give the building a separate place in the plan', paragraphs: [
        'A layout that works inside the bathroom still needs a route into the building. Ask management which work documents, receiving arrangements, elevator reservations or access hours apply to your project. Record the requirements they give you. Building management makes the acceptance decision; a glass estimate does not confirm an installation slot.',
        'Send the bathroom approach, your preferred opening side and the building requirements together. That lets the discussion cover both everyday use and delivery. If you want to retain existing glass or hardware, include close photographs and available product information so compatibility can be reviewed rather than assumed.',
      ], links: [{ label: 'Co-op and condo installation planning', href: '/projects/coop-condo-shower-door-installation-nyc/' }, { label: 'Browse the glass gallery', href: '/gallery/' }] },
    ],
    illustration: { src: '/editorial/neighborhoods/fidi-door-movement.png', alt: 'Concept overhead bathroom showing a glass door movement arc, a nearby vanity and the approach to the shower.', caption: 'Original movement study. It illustrates what to review; it does not establish dimensions, accessibility or a suitable enclosure for your room.', after: 1, portrait: true },
    brief: { service: 'Frameless Shower Door', scope: 'Financial District shower glass: usable entry, swing or sliding movement, nearby fixtures and building access.', photos: ['Bathroom doorway toward the shower', 'Neighboring vanity, toilet and room door', 'Existing rail, hinges or handles if retained'] },
  },
  {
    slug: 'midtown-west-mirror-shower-glass-coordination', neighborhood: 'Midtown West / Hudson Yards · Manhattan',
    title: 'Before a Midtown West mirror refresh, open every door.',
    description: 'Coordinate a bathroom mirror or mirrored cabinet with lights, faucet, storage movement and neighboring shower glass in Midtown West and Hudson Yards.',
    photo: '/gallery/mirror-cabinet-blue-tape.jpg',
    photoAlt: 'Open mirrored cabinet door with blue tape at its edges, visible hinges and reflected bathroom lights beside shower glass.',
    photoCaption: 'MetroGlass Pro gallery work photograph. The open cabinet, tape, hinges and reflected light are visible; its project neighborhood is not established.',
    intro: [
      'A mirror can look perfectly centered while the cabinet behind it cannot open comfortably. The moment to discover that is before the replacement is ordered, with the faucet, light and shower glass still in the picture.',
      'This MetroGlass Pro work photograph catches a mirrored cabinet open, with blue tape along the edges and its hinge side exposed. That unfinished view is more useful for planning than a tidy reflection alone. For a Midtown West or Hudson Yards bathroom refresh, it prompts a choice: are you changing the mirror surface, the storage unit, or the whole arrangement around the vanity?',
    ],
    takeaway: 'Agree what stays, what opens and what needs another trade before sizing the mirror.',
    sections: [
      { id: 'replacement', title: 'A mirror panel and a medicine cabinet are different scopes', paragraphs: [
        'Start by naming the existing item. A wall mirror, a mirror attached to a cabinet door and a complete medicine cabinet need different information. In the photograph, the visible hinges and open door identify a moving cabinet face. They do not reveal a product model, attachment method or hidden wall condition.',
        'If you hope to retain the cabinet, send the complete door, hinge details and any safely visible product label. Ask whether replacement glass can be assessed within that existing assembly. If the storage unit is changing, share the new product information and say whether it sits on the wall or is recessed. Do not order a panel solely from the size of its reflection.',
      ], links: [{ label: 'Custom mirror service', href: '/custom-mirrors-nyc/' }, { label: 'Mirror replacement planning example', href: '/projects/typical-mirror-replacement-nyc/' }] },
      { id: 'open-doors', title: 'Photograph it open, then photograph the room', paragraphs: [
        'An open-door photo shows the relationship between the cabinet edge, faucet and neighboring wall. A second, wider photo shows the shower enclosure and the room door. The blue tape and exposed hinges in this gallery view are visible work details, not evidence of a particular cure time or a finished handover.',
        'KOHLER’s buying guide distinguishes surface-mounted and recessed cabinets and asks buyers to consider the cabinet door’s opening direction. Use those distinctions to describe what you want reviewed. Your selected product’s instructions and actual room conditions govern its installation; the guide does not identify the cabinet shown here.',
      ], checklist: ['Cabinet open and closed, from the same position.', 'Faucet and light in a full vanity-wall view.', 'Nearby shower handle and glass edge in a wider room view.'], links: [{ label: 'KOHLER: mirror and medicine cabinet buying guide', href: 'https://www.kohler.com/en/inspiration/buying-guides/mirrors-and-medicine-cabinets-buying-guide' }] },
      { id: 'light', title: 'Check the light as a fixture, not only a reflection', paragraphs: [
        'The reflected strip of light in the photograph changes how the upper mirror edge reads. In your room, look at the proposed mirror with the lights on and from the height at which you use the basin. Include side fixtures, outlets and anything projecting from the wall when describing the available area.',
        'A plain mirror replacement and a new lighted cabinet may involve different trades. If electrical connections, a recessed opening or a moved fixture are proposed, identify who reviews and performs that work before the glass visit. NYC DOB’s renovation guidance links requirements to the work scope. A mirror discussion does not authorize electrical or wall alterations.',
      ], links: [{ label: 'NYC DOB: renovation requirements depend on scope', href: 'https://www.nyc.gov/site/buildings/property-or-business-owner/renovating-kitchens-bathrooms.page' }, { label: 'Apartment mirror planning guide', href: '/blog/custom-mirrors-manhattan-apartment-guide/' }] },
      { id: 'handoff', title: 'Use one room brief for two separate glass decisions', paragraphs: [
        'If shower glass is changing too, share the same wide room photo for both discussions. Name the mirror or cabinet movement and the shower’s opening side. A smaller fitting or a different opening direction may look promising on a sketch, but the selected assemblies and the measured room still need review.',
        'State what should remain untouched: cabinet body, tile, vanity, lights or shower panels. Ask the proposal to name removal, disposal, surface review, the replacement item and the handoff conditions that apply. The resulting brief helps MetroGlass Pro discuss the mirror scope and the neighboring glass without folding an entire bathroom renovation into a mirror estimate.',
      ], links: [{ label: 'Shower glass services', href: '/frameless-shower-doors-nyc/' }, { label: 'See glass and mirror work in the gallery', href: '/gallery/' }] },
    ],
    illustration: { src: '/editorial/neighborhoods/midtown-mirror-movement.png', alt: 'Concept mirror cabinet with an open door above a basin, a light above and a nearby shower-glass edge.', caption: 'Original coordination illustration. It is not the pictured cabinet, a measured room, or an electrical or mounting instruction.', after: 1 },
    brief: { service: 'Custom Mirror', scope: 'Midtown West / Hudson Yards mirror or cabinet-face replacement: retained storage, lights, faucet and neighboring shower-glass movement.', photos: ['Open and closed mirror cabinet or existing wall mirror', 'Full vanity wall including lights and faucet', 'Nearby shower glass and any available product label'] },
  },
]
