# Tag applied in single contact

<Badge type="tip" vertical="top" text="Mail Mint Core" /> <Badge type="warning" vertical="top" text="Basic" />

```do_action('mailmint_tag_applied',10,2)```

Fires when a contact is added to a tag.


## Hook Arguments

| Argument     | Type       | Description                            |
|--------------|------------|----------------------------------------|
| `tags`       | _`array`_  | An array of the lists to which the contact was added  |
| `contact_id` | _`int`_    | The ID of the contact that was created or updated as a result of the form submission  |


## Usage

```
function my_custom_function( $tags, $contact_id ) {
    // Perform custom logic here.
}
add_action( 'mailmint_tag_applied', 'my_custom_function', 10, 2 );
```

In the example above, my_custom_function is a custom function that will be called when the mint_tag_applied hook is triggered. The function takes two parameters, $tags and $contact_id, which are the same parameters passed to the hook when it is triggered.
The add_action() function is used to register my_custom_function as a callback for the mint_tag_applied hook. The 10 parameter specifies the priority of the hook (i.e. when it should be executed relative to other hooks with the same name), and the 2 parameter specifies the number of parameters the callback function expects.
