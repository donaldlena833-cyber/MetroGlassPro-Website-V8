export type GlassServiceDetail = {
  id: string
  title: string
  description: string
  answer: string
  decisions: Array<{ project: string; planning: string }>
  cost: string
  timing: string
  checklist: string[]
  process: Array<{ title: string; text: string }>
  faqs: Array<{ q: string; a: string }>
  links: Array<{ href: string; label: string; note: string }>
}

export const glassServiceDetails: Record<string, GlassServiceDetail> = {
  'custom-mirrors': {
    id: 'custom-mirrors',
    title: 'Custom Mirror Installation in NYC',
    description: 'Custom mirrors for NYC bathrooms, wall installations, gyms, studios, and commercial interiors. Plan sizes, edges, cutouts, mounting, and replacement.',
    answer: 'MetroGlass Pro measures and installs custom mirrors across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. We handle bathroom and vanity mirrors, larger wall mirrors, gym and studio mirror walls, and mirrors for commercial interiors. A quote starts with the wall, the desired coverage, and the building access needed to deliver the finished glass.',
    decisions: [
      { project: 'Bathroom or vanity mirror', planning: 'Decide the mirror edges relative to the vanity, backsplash, lighting, and outlets. Finish these surrounding details before final measurement.' },
      { project: 'Full wall, gym, or studio mirrors', planning: 'Review panel sizes, seam positions, wall condition, and the delivery route together. A wall drawing helps compare layouts.' },
      { project: 'Retail, salon, or office mirrors', planning: 'Show the fixtures and work area. Include required cutouts, finished edges, mounting preferences, and permitted installation hours.' },
      { project: 'Replacing an existing mirror', planning: 'Include photos of the full mirror and its edges. Removal, wall preparation, and the new mounting approach should be included in the scope.' },
    ],
    cost: 'Mirror pricing depends on dimensions, the number of panels, edge finish, cutouts, mounting method, removal of existing mirrors, and delivery access. A larger panel can require a different carrying route or crew. Ask for a written estimate that identifies these items; square footage alone does not describe the installed job.',
    timing: 'Final measurement follows decisions on finished wall surfaces, fixtures, and cutouts. Fabrication and installation timing is confirmed after the mirror layout, mounting, and building access are reviewed.',
    checklist: ['A photo of the entire wall and the surrounding room.', 'Approximate width and height, plus whether you want one mirror or several panels.', 'Locations of lights, outlets, faucets, and other cutouts.', 'Photos of the existing mirror if removal is needed.', 'Borough, floor, elevator or stair access, and COI requirements.'],
    process: [
      { title: 'Plan the coverage', text: 'Share the wall and the look you want. We review proportions, seams, surrounding fixtures, and delivery access.' },
      { title: 'Measure and specify', text: 'Confirm field dimensions, edge treatment, cutouts, and the mounting approach before the mirror is ordered.' },
      { title: 'Install and finish', text: 'Coordinate building access and work area protection, then install the mirror to the agreed layout.' },
    ],
    faqs: [
      { q: 'Do you install gym and studio wall mirrors in NYC?', a: 'Yes. MetroGlass Pro handles custom mirror walls for gyms and studios as well as homes and commercial interiors. Send the wall dimensions, a room photo, desired coverage, and building access details so panel sizes and seams can be reviewed.' },
      { q: 'Can a custom mirror have cutouts for lights or outlets?', a: 'Cutouts can be reviewed as part of a custom mirror order. Send the fixture layout before final measurement. The size and position of each opening must be settled before fabrication.' },
      { q: 'Can a large wall be covered with one mirror?', a: 'That depends on the panel size, the wall, and the route through doors, elevators, or stairs. Multiple panels may be more practical. We review the delivery route alongside the desired seam layout before ordering.' },
      { q: 'Do you replace cracked or damaged mirrors?', a: 'Yes. Send a photo of the full mirror and the damage from a safe position. The replacement scope should account for removal, the condition of the wall behind it, and the mounting method for the new mirror.' },
      { q: 'How much does custom mirror installation cost in NYC?', a: 'The installed price depends on dimensions, panel count, edge finish, cutouts, removal, mounting, and access. Send photos and rough sizes for an initial review. Final pricing follows confirmation of the project details and any required field measurement.' },
      { q: 'What should be finished before you measure a vanity mirror?', a: 'The vanity position, backsplash, finished wall, lights, and outlet locations should be settled. Tell us if any of these will change so the mirror is not measured against a temporary layout.' },
    ],
    links: [
      { href: '/blog/custom-mirrors-manhattan-apartment-guide/', label: 'Planning mirrors for a Manhattan apartment', note: 'Wall layout, proportions, and installation planning.' },
      { href: '/projects/typical-mirror-replacement-nyc/', label: 'Typical mirror replacement scenario', note: 'An illustrative planning example, not a completed project case study.' },
    ],
  },
  'glass-partitions': {
    id: 'glass-partitions',
    title: 'Glass Partition Installation in NYC',
    description: 'Interior glass partitions, office glass walls, conference rooms, and room dividers in NYC. Plan layout, doors, privacy, building access, and estimates.',
    answer: 'MetroGlass Pro installs interior glass partitions in New York City for offices, conference rooms, residential room dividers, and commercial interiors. We review the glass layout, door operation, privacy preferences, and attachment surfaces as one project. Send a floor plan or room photos to start an estimate.',
    decisions: [
      { project: 'Office or conference room', planning: 'Set door locations, clearances, furniture layout, and privacy needs early. Tell us whether speech privacy is a requirement.' },
      { project: 'Apartment or home office divider', planning: 'Review the opening, daylight, door swing, floor condition, and ceiling attachment. Include the building rules for alterations.' },
      { project: 'Retail or hospitality interior', planning: 'Share circulation routes, operating hours, and the proposed glass boundary. Coordinate customer access during installation.' },
      { project: 'Existing partition replacement', planning: 'Show the complete system, glass edges, channels, and door hardware. Replacement glass must suit the existing assembly.' },
    ],
    cost: 'Partition pricing depends on total dimensions, panel count, doors, hardware, privacy treatment, supporting conditions, and site access. A fixed glass divider and a conference room with doors are different scopes even when the glass area is similar. Include demolition, finishes, and work outside normal building hours in the estimate discussion.',
    timing: 'Plan glass after the room layout and finished floor and ceiling conditions are understood. Confirm the glass and door details before fabrication. Installation timing depends on the assembly, preparation work, and the building schedule.',
    checklist: ['A floor plan or a sketch showing the proposed glass wall and doors.', 'Photos of the room, floor, ceiling, and adjoining walls.', 'Approximate width and height, plus door swing or sliding preferences.', 'Visual privacy preferences and any required acoustic performance.', 'Building location, COI instructions, delivery access, and allowed work hours.'],
    process: [
      { title: 'Review the room', text: 'Start with the layout, circulation, and the reason for the divider. Identify door positions and privacy requirements.' },
      { title: 'Coordinate the assembly', text: 'Review measurements, glass, channels, hardware, and attachment points alongside the finished floor and ceiling.' },
      { title: 'Schedule the installation', text: 'Confirm delivery access, occupied areas, and protection before setting the glass and checking door operation.' },
    ],
    faqs: [
      { q: 'Do you install office glass walls and conference room partitions?', a: 'Yes. MetroGlass Pro handles interior glass walls and partitions for NYC offices and conference rooms. Share a layout, approximate dimensions, door locations, and building requirements for a project review.' },
      { q: 'Can glass partitions include doors?', a: 'Yes. Door layout and hardware should be planned with the surrounding glass. Show the desired swing or sliding direction, nearby furniture, and access clearances so the complete arrangement can be reviewed.' },
      { q: 'Can a glass partition provide privacy?', a: 'Discuss clear glass, frosted glass, or a privacy treatment when requesting the estimate. Visual privacy and sound isolation are separate requirements, so tell us if you need to limit views, reduce conversations carrying, or both.' },
      { q: 'Are glass office partitions soundproof?', a: 'Sound performance depends on the complete assembly, including glass, doors, seals, and connections to the floor and ceiling. A glass thickness alone does not establish a room sound rating. If speech privacy matters, provide the required performance before the system is selected.' },
      { q: 'Can partition work happen in an occupied office?', a: 'Tell us which areas must remain in use, the permitted work hours, and the delivery route. We review protection and scheduling with those constraints before confirming the installation plan.' },
      { q: 'What is needed to price a glass partition?', a: 'Send the room layout, approximate height and width, door count, privacy requirements, and photos of the supporting surfaces. Final pricing depends on the selected assembly, field dimensions, and access.' },
    ],
    links: [
      { href: '/blog/office-glass-partitions-manhattan-planning-guide/', label: 'Manhattan office partition planning guide', note: 'Layout decisions, occupied spaces, and building coordination.' },
      { href: 'https://glassed.vitroglazings.com/determining-the-right-glass-for-the-right-acoustics', label: 'Vitro: glass and acoustic performance', note: 'Manufacturer guidance on assessing the complete glazing system.' },
    ],
  },
  'glass-railings': {
    id: 'glass-railings',
    title: 'Glass Railing Installation in NYC',
    description: 'Glass railings for NYC stairs, landings, balconies, and terraces. Review mounting, supporting structure, glass specifications, access, and project estimates.',
    answer: 'MetroGlass Pro handles glass railing projects in New York City, including stairs, landings, balconies, and terraces. Each project starts with the location, supporting structure, railing layout, and proposed system. Glass, hardware, and anchorage must be considered together before final pricing or fabrication.',
    decisions: [
      { project: 'Interior stairs and landings', planning: 'Share stair geometry, finished surfaces, mounting locations, and any architect or engineer drawings. Coordinate handrails and transitions.' },
      { project: 'Balconies and terraces', planning: 'Include exterior exposure, slab or edge details, waterproofing, access, and building requirements in the review.' },
      { project: 'Post or base channel systems', planning: 'Compare sightlines with the attachment conditions. Hardware selection must suit the glass and the supporting structure.' },
      { project: 'Replacement railing panel', planning: 'Identify the existing system and glass specification. A replacement must be reviewed for compatibility with the complete guard assembly.' },
    ],
    cost: 'Railing pricing depends on layout length, corners, stairs, glass specification, posts or channels, handrails, attachment conditions, access, and any required design coordination. A straight interior run and an exterior stair or terrace have different requirements. Plans and site photos make the initial review more useful than a per-foot number alone.',
    timing: 'The system, supporting conditions, and any required design or building approvals need to be resolved before fabrication. We confirm project timing after reviewing these details and the site access.',
    checklist: ['Overall photos of the stair, landing, balcony, or terrace.', 'Approximate run lengths, corners, level changes, and desired appearance.', 'Drawings or specifications from your architect, engineer, or building.', 'Photos of proposed mounting surfaces and existing railing connections.', 'Site address, delivery route, exterior access needs, and building requirements.'],
    process: [
      { title: 'Review the site and plans', text: 'Identify the railing location, the supporting surfaces, the intended appearance, and the existing project requirements.' },
      { title: 'Confirm the system', text: 'Coordinate glass and hardware with the supporting structure and the project design team where required. Confirm details before ordering.' },
      { title: 'Measure and install', text: 'Finalize site dimensions and access, then install to the agreed project specification and review the finished assembly.' },
    ],
    faqs: [
      { q: 'Do you install glass railings in New York City?', a: 'Yes. MetroGlass Pro reviews and installs glass railing projects across NYC, including stairs, landings, balconies, and terraces. Send site photos and any plans so the system, mounting conditions, and access can be assessed.' },
      { q: 'What glass thickness do I need for a railing?', a: 'Thickness is determined with the specified railing system, panel dimensions, support conditions, and project requirements. Do not choose railing glass from a shower door specification. The complete assembly needs to be reviewed before glass is ordered.' },
      { q: 'Can glass railings be installed outdoors?', a: 'Exterior railing projects are reviewed for the proposed system, supporting structure, exposure, waterproofing, and access. Send balcony or terrace photos and building requirements so the installation scope can be confirmed.' },
      { q: 'Can you replace one damaged glass railing panel?', a: 'A single panel may be replaceable after the existing system, glass specification, hardware, and supports are reviewed. Keep people away from a damaged or loose guard and arrange an assessment before using the affected area.' },
      { q: 'Do glass railings need design or building approval?', a: 'Approval and design requirements depend on the property and project. Share the building instructions and any architect or engineer details early. The railing specification and any required approvals should be settled before fabrication.' },
      { q: 'How do I get a glass railing estimate?', a: 'Send photos, rough run lengths, stair or terrace details, proposed mounting locations, and available drawings. The written scope should identify the glass, hardware, installation conditions, and any work or design coordination needed before installation.' },
    ],
    links: [
      { href: '/glass-repair-nyc/', label: 'Damaged glass and replacement assessment', note: 'How to request a review of an existing panel or assembly.' },
      { href: 'https://www.nyc.gov/site/buildings/codes/2022-construction-codes.page', label: 'NYC Department of Buildings construction codes', note: 'Project professionals should confirm the applicable glass, guard, and structural requirements.' },
    ],
  },
  glazing: {
    id: 'glazing',
    title: 'Glazing and Glass Replacement in NYC',
    description: 'Residential and commercial glazing in NYC. Glass fitting and replacement with review of openings, frames, glass specifications, access, and installation scope.',
    answer: 'MetroGlass Pro provides residential and commercial glazing in New York City. Glazing is the fitting and installation of glass into an opening or supporting system. We review replacement glass in existing frames, interior glass panels, and renovation glazing with homeowners, property managers, designers, and contractors.',
    decisions: [
      { project: 'Replacement glass in an existing opening', planning: 'Show the full opening and frame. The frame condition, existing glass specification, and site access determine the replacement approach.' },
      { project: 'Retail or commercial glass panel', planning: 'Include elevations, glass markings if visible, operating hours, and delivery access. Confirm the glass work and any separate frame work in the scope.' },
      { project: 'Interior renovation glazing', planning: 'Share the floor plan, panel locations, finished surfaces, and any required glass schedule before final measurement.' },
      { project: 'Trade or property management project', planning: 'Send quantities, dimensions, specifications, site contacts, and phasing requirements. Identify whether removal and disposal are needed.' },
    ],
    cost: 'Glazing estimates depend on the glass type, dimensions, quantity, edge and cutout requirements, condition of the existing system, removal, and installation access. Include any specified tempered, laminated, insulated, patterned, or other glass in your request so suitability and availability can be confirmed. Final pricing requires a defined installation scope.',
    timing: 'Glass availability, fabrication requirements, frame readiness, and building access affect the schedule. Send your target date with the plans or photos. We confirm the approach and timing after reviewing the opening and specification.',
    checklist: ['Photos of the entire opening, existing frame, and surrounding space.', 'Rough glass sizes and quantities; do not handle damaged glass to measure it.', 'Plans, elevations, a glass schedule, or visible markings if available.', 'Details of removal, access height, stairs or elevators, and occupied areas.', 'Project location, target date, site contact, and building or COI requirements.'],
    process: [
      { title: 'Define the glass work', text: 'Review the opening, existing system, plans, and intended use. Identify what needs replacement and what can remain.' },
      { title: 'Confirm dimensions and specification', text: 'Check field dimensions, frame condition, glass requirements, and the scope of removal and installation.' },
      { title: 'Coordinate and install', text: 'Arrange delivery and site access, protect the work area, and fit the specified glass into the prepared opening.' },
    ],
    faqs: [
      { q: 'What does a glazier do?', a: 'A glazier measures, fits, and installs glass in openings or supporting systems. MetroGlass Pro handles NYC glass installation and replacement projects, alongside shower doors, mirrors, glass partitions, railings, and repair assessment.' },
      { q: 'Do you handle residential and commercial glazing?', a: 'Yes. Send the location, photos or drawings, glass requirements, and access details. We review the proposed residential or commercial glass work and confirm the installation scope before quoting.' },
      { q: 'Can glass be replaced without replacing the whole frame?', a: 'It may be possible when the existing frame and supporting system are suitable. Photos help with the first review, but frame condition, glass specification, and site dimensions need to be confirmed before ordering a replacement.' },
      { q: 'Can you review glass replacement for a storefront?', a: 'Yes. Send photos of the glass and existing frame, rough dimensions, access details, and any specifications. The estimate will identify the glass work and whether separate frame work or other project coordination is needed.' },
      { q: 'What glass specification should I send?', a: 'Send the project glass schedule or the existing markings if they are safely visible. Include required thickness, glass type, tint or pattern, and any performance requirements. If these are unknown, send photos so the next assessment step can be identified.' },
      { q: 'Can you quote glazing from drawings?', a: 'Drawings, quantities, and specifications can support an initial scope review. Site conditions, final measurements, frame readiness, and access must be confirmed before fabrication and installation are finalized.' },
    ],
    links: [
      { href: '/glass-repair-nyc/', label: 'Repair or replace damaged glass', note: 'Start here when damage or hardware failure is the immediate concern.' },
      { href: '/glass-partitions-nyc/', label: 'Interior glass walls and partitions', note: 'Planning a new room divider or office enclosure.' },
    ],
  },
  'glass-repair': {
    id: 'glass-repair',
    title: 'Glass Repair and Broken Glass Replacement in NYC',
    description: 'Glass repair assessment and broken glass replacement in NYC for panels, mirrors, partitions, and glass doors. Send damage photos, location, and access details.',
    answer: 'MetroGlass Pro assesses glass repair and replacement needs across New York City for residential and commercial properties. We review damaged panels, cracked mirrors, glass partitions, and glass door hardware. The first decision is whether the problem is in the glass, the hardware, or the supporting system, so the quote addresses the actual cause.',
    decisions: [
      { project: 'Cracked or shattered glass panel', planning: 'Keep the area clear and send photos from a safe distance. Damaged glass is assessed for panel replacement and the surrounding frame is reviewed.' },
      { project: 'Door dragging, slipping, or not closing', planning: 'Describe the movement and show the door and hardware if safely accessible. The review should cover hinges, rollers, alignment, and supports.' },
      { project: 'Damaged mirror or partition', planning: 'Include a full view, edge details, and approximate size. Removal, replacement glass, and mounting should be considered together.' },
      { project: 'Loose railing or damaged guard panel', planning: 'Keep people away from the affected area. The glass and supporting assembly need assessment before the area returns to use.' },
      { project: 'Leaking shower door', planning: 'Show where water escapes and the full enclosure. Seals, door alignment, curb conditions, and the original layout may affect the repair.' },
    ],
    cost: 'Repair pricing depends on diagnosis, available parts, glass specification, panel size, removal, supporting conditions, and access. A hardware adjustment has a different scope from custom glass replacement. We review photos first and identify when a site assessment is needed before a meaningful price can be given.',
    timing: 'Tell us whether the damage creates an immediate access problem and include your location. Appointment availability and any replacement glass or parts lead time must be confirmed. A request marked urgent is not a confirmed service appointment.',
    checklist: ['A full view of the opening or assembly, taken from a safe distance.', 'A description of what happened and whether glass is cracked, loose, leaking, or difficult to move.', 'Approximate dimensions and visible hardware or glass markings, if safely accessible.', 'The borough, building type, floor, and access restrictions.', 'Your contact details, urgency, and whether the area can be kept out of use.'],
    process: [
      { title: 'Describe the problem', text: 'Send an overall photo and explain the symptoms. Avoid handling broken glass or operating a door that appears unstable.' },
      { title: 'Assess repair versus replacement', text: 'Review glass condition, hardware compatibility, supports, and whether a site assessment is needed.' },
      { title: 'Confirm the work', text: 'Agree the scope, parts or glass requirements, access, and schedule before the repair or replacement is arranged.' },
    ],
    faqs: [
      { q: 'Do you repair glass beyond shower doors?', a: 'Yes. MetroGlass Pro reviews damaged glass panels, mirrors, partitions, railing panels, and glass door hardware as well as shower doors. Send an overall photo and describe the issue so the right repair or replacement path can be assessed.' },
      { q: 'Can cracked tempered glass be repaired?', a: 'Cracked or shattered tempered glass needs replacement. The new panel must be specified for the existing application and supporting system. Keep the damaged area out of use and send photos from a safe distance.' },
      { q: 'Can a glass door problem be fixed without replacing the glass?', a: 'Some problems involve hinges, rollers, seals, or alignment rather than damaged glass. Repair depends on the glass condition, compatible parts, and the supporting system. Send a full door photo and describe how it is moving or leaking.' },
      { q: 'Do you offer same-day or emergency glass repair?', a: 'Call (332) 999-3846 to ask about current availability and describe the damage. Appointment timing must be confirmed; custom replacement glass or specific hardware may require ordering. Do not rely on an online estimate request as a confirmed emergency response.' },
      { q: 'Should I repair or replace a leaking shower door?', a: 'A worn sweep, seal, or hardware issue may be repairable. Damaged glass, unsuitable hardware, or a layout that directs water outside the enclosure can require a different solution. Photos and an assessment help separate these causes.' },
      { q: 'What photos help with a glass repair estimate?', a: 'Send the full opening, a safe view of the damage, and visible hardware or markings if accessible. Add the location, approximate size, and building access details. Do not touch unstable glass or move it to get a better photo.' },
    ],
    links: [
      { href: '/shower-door-repair-nyc/', label: 'Shower door repair, leaks, and hardware', note: 'Detailed guidance for an existing shower enclosure.' },
      { href: '/glazing-nyc/', label: 'Glazing and replacement glass', note: 'Planning replacement glass within an existing opening or system.' },
    ],
  },
}
