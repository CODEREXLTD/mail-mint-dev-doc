# Form submit

<Badge type="tip" vertical="top" text="Mail Mint Core" /> <Badge type="warning" vertical="top" text="Basic" />

```mrm_after_form_submit```

Fires after a form is submitted in the Mail Mint.


## Hook Arguments

| Argument   | Type        | Description                            |
|------------|-------------|----------------------------------------|
| `form_id`  | _`int`_     | The ID of the form that was submitted  |
| `contact_id`| _`int`_     | The ID of the contact that was created or updated as a result of the form submission  |
| `contact` | _`object`_     | The object that represents the contact that was created or updated.|


## Usage

```
function my_custom_function( $form_id, $contact_id, $contact ) {
    // Perform custom logic here.
}
add_action( 'mrm_after_form_submit', 'my_custom_function', 10, 3 );
```

In the example above, my_custom_function is a custom function that will be called when the mrm_after_form_submit hook is triggered. The function takes three parameters, $form_id, $contact_id, and $contact, which are the same parameters passed to the hook when it is triggered.
The add_action() function is used to register my_custom_function as a callback for the mrm_after_form_submit hook. The 10 parameter specifies the priority of the hook (i.e. when it should be executed relative to other hooks with the same name), and the 3 parameter specifies the number of parameters the callback function expects.
