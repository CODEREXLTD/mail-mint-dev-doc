# Form builder blocks support

<Badge type="tip" vertical="top" text="Mail Mint Core" /> <Badge type="warning" vertical="top" text="Basic" />

```apply_filters('mrm_add_form_builder_blocks_support',10,1)```

Filters the list of allowed blocks in the  Mail Mint form builder.


## Hook Arguments

| Argument     | Type       | Description                                      |
|--------------|------------|--------------------------------------------------|
| `allowed_blocks_for_editor`      | _`array`_  | The list of allowed blocks for the form builder. |
|


## Usage

```
function my_custom_function( $allowed_blocks ) {
    // Modify the list of allowed blocks here.
    return $allowed_blocks;
}
add_filter( 'mrm_add_form_builder_blocks_support', 'my_custom_function', 10, 1 );

```
In the example above, my_custom_function is a custom function that will be called when the mrm_add_form_builder_blocks_support hook is triggered. The function takes one parameter, $allowed_blocks, which is the same parameter passed to the hook when it is triggered. The function modifies the list of allowed blocks and returns the modified array.
The add_filter() function is used to register my_custom_function as a filter for the mrm_add_form_builder_blocks_support hook. The 10 parameter specifies the priority of the hook (i.e. when it should be executed relative to other hooks with the same name), and the 1 parameter specifies the number of parameters the callback function expects.
