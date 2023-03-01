# CONTACT PHP API

<Badge type="tip" vertical="top" text="Mail Mint Core" /> <Badge type="warning" vertical="top" text="Basic" />


MailMint  has the following PHP api functions so you can easily add/modify contacts.


## Create/Update Single Contact

```
$args = [
  'email'      => 'steve@smith.com', // required
  'first_name' => 'Steve',
  'last_name'  => 'Smith',
  'status'     => 'pending',         // subscribed/pending/unsubscribed
  'lists'      => [ 1, 2, 3 ],       // list ids as an array
  'tags'       => [ 4, 5 ],          // tag ids as an array
  'meta_fields' => [
     'country' => 'United States (US)',
     'phone_number' => '+14844731014    '
  ]
];

// creates single contacts
$contact_id = mailmint_create_single_contact( $args );
```


## Create/Update Multiple Contacts

```
$args = [
  [
     'email'      => 'steve@smith.com', // required
     'first_name' => 'Steve',
     'last_name'  => 'Smith',
     'status'     => 'pending',         // subscribed/pending/unsubscribed
     'lists'      => [ 1, 2, 3 ],       // list ids as an array
     'tags'       => [ 4, 5 ],          // tag ids as an array
     'meta_fields' => [
        'country' => 'United States (US)',
        'phone_number' => '+14844731014    '
     ]
  ],
  [
     'email'      => 'Williams@smith.com', // required
     'first_name' => 'Williams',
     'last_name'  => 'Smith',
     'status'     => 'pending',         // subscribed/pending/unsubscribed
     'lists'      => [ 1, 2, 3 ],       // list ids as an array
     'tags'       => [ 4, 5 ],          // tag ids as an array
     'meta_fields' => [
        'country' => 'United States (US)',
        'phone_number' => '+14843751014    '
     ]
  ]
];

// creates multiple contacts
mailmint_create_multiple_contacts( $args );
```

## Create/Update Single Contact Group

```
$type = 'lists'; // type can be lists or tags

$args = [
  'title' => 'Beta Testers',              // required
  'data' => 'Beta testers of Mail Mint'   // Description of the group
];

// creates a single contact group [lists/tags]
$group_id = mailmint_create_single_contact_group( $type, $args );
```

## Create/Update Multiple Contact Groups


```
$type = 'tags'; // type can be lists or tags

$args = [
  [
     'title' => 'Early Adopters',              // required
     'data' => 'Early adopters of Mail Mint'   // Description of the group
  ],
  [
     'title' => 'Beta Testers',              // required
     'data' => 'Beta testers of Mail Mint'   // Description of the group
  ]
  ];


// creates a multiple contact groups [lists/tags]
mailmint_create_multiple_contact_groups( $type, $args );
```



## Create/Update Multiple Contact Groups



```
$type = 'lists';    // type can be lists or tags
$args = [ 96, 97 ]; // valid group ids [list/tag ids]
$contact_id = 29;   // a valid contact id

// assign group ids  [lists/tags] to a specific contact
mailmint_add_contact_to_groups( $type, $args, $contact_id );
```