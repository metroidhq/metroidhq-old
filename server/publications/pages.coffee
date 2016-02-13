Meteor.publish 'pages', ->

    # Get Current User
    user = Meteor.users.findOne
        _id: @userId

    # If Current User Exists and is Admin
    if user && user.roles && user.roles.__global_roles__.indexOf('admin') != -1

        # Publish All Pages
        Pages.find
            access:
                $in: ['public', 'admin']

    else

        # Publish Publish Pages
        Pages.find
            access: 'public'