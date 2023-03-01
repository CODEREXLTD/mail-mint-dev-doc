# Mail Mint single email scheduling processed

<Badge type="tip" vertical="top" text="Mail Mint Core" /> <Badge type="warning" vertical="top" text="Basic" />

```do_action('mailmint_campaign_email_sent',10,2)```

Fires when the MailMint plugin has finished processing a single email during the email batch scheduling process.


## Hook Arguments

| Argument     | Type    | Description                            |
|--------------|---------|----------------------------------------|
| `campaign_id`      | _`int`_ | The ID of the campaign that the email was sent for.  |
| `email_id` | _`int`_ | The ID of the email that was sent  |


## Usage

```
function my_custom_function( $campaign_id, $email_id ) {
    // Perform custom logic here.
}
add_action( 'mailmint_campaign_email_sent', 'my_custom_function', 10, 2 );

```

In the example above, my_custom_function is a custom function that will be called when the mailmint_campaign_email_sent hook is triggered. The function takes two parameters, $campaign_id and $email_id, which are the same parameters passed to the hook when it is triggered.
The add_action() function is used to register my_custom_function as a callback for the mailmint_campaign_email_sent hook. The 10 parameter specifies the priority of the hook (i.e. when it should be executed relative to other hooks with the same name), and the 2 parameter specifies the number of parameters the callback function expects.
