@AdminConfig =
    name: 'Metroid HQ Admin'
    skin: 'green'

    collections:
        Pages:
            icon: 'file'
            label: 'Pages'
            tableColumns: [
                {
                    label: 'Title'
                    name: 'title'
                }
                {
                    label: 'Slug'
                    name: 'slug'
                }
                {
                    label: 'Template'
                    name: 'template'
                }
                {
                    label: 'Comments'
                    name: 'comments'
                }
                {
                    label: 'Access'
                    name: 'access'
                }
                {
                    label: 'ID'
                    name: '_id'
                }
            ]

        PageMeta:
            icon: 'code'
            label: 'Page Meta'
            tableColumns: [
                {
                    label: 'Page ID'
                    name: 'page'
                }
                {
                    label: 'Key'
                    name: 'key'
                }
                {
                    label: 'Value'
                    name: 'value'
                }
                {
                    label: 'ID'
                    name: '_id'
                }
            ]

        PageComments:
            icon: 'comment'
            label: 'Page Comments'
            tableColumns: [
                {
                    label: 'Page ID'
                    name: 'page'
                }
                {
                    label: 'User ID'
                    name: 'user'
                }
                {
                    label: 'Comment'
                    name: 'comment'
                }
                {
                    label: 'Created At'
                    name: 'createdAt'
                }
                {
                    label: 'ID'
                    name: '_id'
                }
            ]