@Pages = new Mongo.Collection 'pages'
Pages.attachSchema new SimpleSchema
    title:
        type: String
        label: 'Title'

    slug:
        type: String
        label: 'Slug'

    template:
        type: String
        label: 'Template'

    comments:
        type: Boolean
        label: 'Comments'
        defaultValue: false

    access:
        type: String
        label: 'Access'
        defaultValue: 'public'
        allowedValues: [
            'public'
        ]