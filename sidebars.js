module.exports = {
  someSidebar: {
    "Welcome": ['introduction'],
    "Get Started": ['register-account', 'add-website', 
                    {
        type: 'category',
        label: 'How to add the script to your website',
        items: ['plausible-script', 'javascript-snippet', 'wordpress-integration'],
      },
                   'spa-support', 'verify-integration'],
    "Website Settings": ['website-settings', 'general', 'visibility', 'shared-links', 'goal-conversions', 'google-search-console-integration', 'email-reports', 'custom-domain', 'export-stats', 'delete-site-data', 'excluding'],
    "Dashboard": ['guided-tour',
    {
        type: 'category',
        label: 'Top Referrers',
        items: ['top-referrers', 'manual-link-tagging', 'twitter'],
      },
                  'top-pages', 'countries', 'devices'],
    "Goal Conversions": ['pageview-goals', 'custom-event-goals'],
    "Account Settings": ['trial-to-paid', 'change-email', 'reset-password', 'change-plan', 'cancel-subscription', 'delete-account'],
    "Contribute": ['contribute', 'community-integrations', 'authors'],
  },
};
