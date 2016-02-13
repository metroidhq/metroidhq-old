@PageMeta = new Mongo.Collection 'pageMeta'
PageMeta.attachSchema new SimpleSchema
    page:
        type: String
        label: 'Page Reference'

    key:
        type: String
        label: 'Key'

    value:
        type: String
        label: 'Value'