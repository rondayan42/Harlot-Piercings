import { buildLegacyTheme } from 'sanity'

const props = {
  '--my-white': '#E5E7EB',
  '--my-black': '#0e101a',       // Deep dark card bg from frontend
  '--harlot-gold': '#B8963D',    // Main accent
  '--harlot-red': '#5A0A18',     // Blood red for destructive actions
  '--harlot-purple': '#1F0A2A',  // Deep purple for navbar
  '--harlot-gray': '#3c424f',    // Steel gray
}

export const harlotTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': props['--harlot-gray'],
  '--gray-base': props['--harlot-gray'],

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  /* Brand */
  '--brand-primary': props['--harlot-gold'],

  // Default button
  '--default-button-color': props['--harlot-gray'],
  '--default-button-primary-color': props['--harlot-gold'],
  '--default-button-success-color': '#059669',
  '--default-button-warning-color': '#d97706',
  '--default-button-danger-color': props['--harlot-red'],

  /* State */
  '--state-info-color': props['--harlot-gold'],
  '--state-success-color': '#059669',
  '--state-warning-color': '#d97706',
  '--state-danger-color': props['--harlot-red'],

  /* Navbar */
  '--main-navigation-color': props['--harlot-purple'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--harlot-gold'],
})
