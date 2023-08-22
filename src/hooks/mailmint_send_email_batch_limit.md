# Send Email Batch Limit Action Hook

The `mailmint_send_email_batch_limit` action hook is triggered when MailMint has finished processing a single email during the email batch-scheduling process.

## Hook Arguments

| Argument     | Type    | Description                            |
|--------------|---------|----------------------------------------|
| `per_batch`      | _`int`_ | Number of emails sent in a single batch.  |

## Usage

You can use this action hook to perform custom logic when MailMint finishes processing a single email in the batch-scheduling process.

```
function my_custom_function( $per_batch ) {
       // Perform custom logic here.
   }
add_action( 'mailmint_send_email_batch_limit', 'my_custom_function', 10, 1 );
```

In the example above, the my_custom_function is a custom function that will be called when the mailmint_send_email_batch_limit hook is triggered. The function takes one parameter, $per_batch, which represents the number of emails sent in a single batch.