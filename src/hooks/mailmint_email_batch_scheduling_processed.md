# Per batch email scheduling processed

<Badge type="tip" vertical="top" text="Mail Mint Core" /> <Badge type="warning" vertical="top" text="Basic" />

```do_action('mailmint_email_batch_scheduling_processed',10,2)```

This action is triggered when MailMint has finished processing an email batch as part of the email batch-scheduling process.

## Hook Arguments

| Argument     | Type    | Description                            |
|--------------|---------|----------------------------------------|
| `campaign_id`      | _`int`_ | The ID of the campaign that the email belongs to.  |
| `campaign_email_id` | _`int`_ | The ID of the email that was processed  |


## Usage

```
function my_custom_function( $campaign_id, $campaign_email_id ) {
    // Perform custom logic here.
}
add_action( 'mailmint_email_batch_scheduling_processed', 'my_custom_function', 10, 2 );

```

In the example above, my_custom_function is a custom function that will be called when the mailmint_email_batch_scheduling_processed hook is triggered. The function takes two parameters, $campaign_id and $campaign_email_id, which are the same parameters passed to the hook when it is triggered.
The add_action() function is used to register my_custom_function as a callback for the mailmint_email_batch_scheduling_processed hook. The 10 parameter specifies the priority of the hook (i.e. when it should be executed relative to other hooks with the same name), and the 2 parameter specifies the number of parameters the callback function expects.
