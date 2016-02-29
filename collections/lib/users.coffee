Meteor.users.attachSchema new SimpleSchema
    username:
        type: String
        label: 'Username'

    emails:
        type: Array
        label: 'Emails'

    'emails.$':
        type: Object
        label: 'Emails Object'

    'emails.$.address':
        type: String
        label: 'Email Address'
        regEx: SimpleSchema.RegEx.Email

    'emails.$.verified':
        type: Boolean
        label: 'Email Verified'
        defaultValue: false

    'emails.$.primary':
        type: Boolean
        label: 'Primary Email'
        defaultValue: false

    profile:
        type: Object
        label: 'Profile'

    'profile.firstName':
        type: String
        label: 'First Name'
        optional: true

    'profile.lastName':
        type: String
        label: 'Last Name'
        optional: true

    'profile.displayName':
        type: String
        label: 'Display Name'
        allowedValues: [
            'firstLast'
            'first'
            'firstLastInit'
            'firstInitLast'
            'firstInitLastInit'
            'username'
            'firstUsernameLast'
        ]

    'profile.title':
        type: String
        label: 'Title'
        optional: true

    'profile.bio':
        type: String
        label: 'Bio'
        optional: true

    'profile.birthday':
        type: Date
        label: 'Birthday'
        optional: true

    'profile.birthdayDisplay':
        type: Boolean
        label: 'Birthday Display'
        defaultValue: false

    'profile.websiteName':
        type: String
        label: 'Website Name'
        optional: true

    'profile.websiteUrl':
        type: String
        label: 'Website URL'
        regEx: SimpleSchema.RegEx.Url
        optional: true

    'profile.posts':
        type: Number
        label: 'Posts'

    'profile.gravatar':
        type: Boolean
        label: 'Gravatar'
        defaultValue: true

    'profile.avatar':
        type: String
        label: 'Avatar'
        optional: true

    'profile.signature':
        type: String
        label: 'Signature'
        optional: true

    'profile.lastSeen':
        type: Date
        label: 'Last Seen'
        defaultValue: new Date()

    'profile.timeZone':
        type: Number
        label: 'Time Zone'
        optional: true

    createdAt:
        type: Date
        label: 'Created At'
        defaultValue: new Date()

    services:
        type: Object
        label: 'Services (Required for Password)'
        optional: true
        blackbox: true

    roles:
        type: Object
        label: 'Roles (Required for Admin)'
        optional: true
        blackbox: true

    heartbeat:
        type: Date
        label: 'Heartbeat (Required for Meteor)'
        optional: true