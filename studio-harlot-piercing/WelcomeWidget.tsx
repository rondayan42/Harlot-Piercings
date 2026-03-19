import React from 'react'
import {DashboardWidget} from '@sanity/dashboard'

export function welcomeWidget(): DashboardWidget {
  return {
    name: 'welcome-widget',
    component: function Welcome() {
      return (
        <div style={{padding: '2rem', fontFamily: 'system-ui, sans-serif', lineHeight: '1.5'}}>
          <h2 style={{marginTop: 0}}>Manage Your Website Easily</h2>
          <p>
            Use the links on the left sidebar to update your <b>Services</b>, <b>Aftercare Instructions</b>, <b>FAQs</b>, and <b>Gallery Images</b>.
          </p>
          <div style={{
            background: '#eef2ff',
            color: '#312e81',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1.5rem',
            border: '1px solid #c7d2fe'
          }}>
            <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1rem'}}>💡 Quick Tips</h3>
            <ul style={{margin: 0, paddingLeft: '1.5rem'}}>
              <li style={{marginBottom: '0.25rem'}}>
                <b>Media Library:</b> Click the 📷 <i>Media</i> icon on the top right (or in the sidebar) to organize all your uploaded photos into folders.
              </li>
              <li>
                <b>Global Settings:</b> Update your Studio Hours, Address, and SEO details under the ⚙️ <i>Global Site Settings</i> tab.
              </li>
            </ul>
          </div>
        </div>
      )
    },
    layout: {width: 'auto'},
  }
}
