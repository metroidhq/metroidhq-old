@PageMeta = new Mongo.Collection 'pageMeta'
PageMeta.attachSchema new SimpleSchema
    pageId:
        type: String
        label: 'Page Reference'

    key:
        type: String
        label: 'Key'

    value:
        type: String
        label: 'Value'