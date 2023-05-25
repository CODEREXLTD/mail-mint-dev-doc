module.exports = [
  {
    title: 'Getting Started',
    collapsable: false,
    sidebarDepth: -1,
    children: [
      [ '', 'Mail Mint Introduction ' ],
    ]
  },
  {
    title: 'Mail Mint API',
    collapsable: false,
    sidebarDepth: -1,
    children: [
      'create_contact_api',
    ]
  },
  {
    title: 'Action Hooks',
    collapsable: false,
    sidebarDepth: -1,
    children: [
      'mailmint_loaded',
      'mint_post_install',
      'tag-applied',
      'list-applied',
      'after-form-submit',
      'before-form-submit',
      'mailmint_email_batch_scheduling_process',
      'mailmint_email_batch_scheduling_processed',
      'mailmint_single_email_scheduling_processed',
      'mint_send_campaign_email',
    ]
  },
  {
    title: 'Filter Hooks',
    collapsable: false,
    sidebarDepth: -1,
    children: [
      'mint_add_form_builder_blocks_support',
      // 'mint_form_template',
    ]
  }
];
