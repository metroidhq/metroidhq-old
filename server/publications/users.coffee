Meteor.publish 'users', ->

    # Store Public User Fields
    users = Meteor.users.find
            _id: @userId
        ,
            fields:
                username: 1
                profile: 1
                createdAt: 1
                roles: 1

    .fetch()

    # For Each User
    for user in users
        if user.profile

            # If User Displays Username
            if user.profile.displayName == 'username'

                # Delete First and Last Name
                delete user.profile.firstName
                delete user.profile.lastName

            # If User Displays First Name
            if user.profile.displayName == 'first'

                # Delete Last Name
                delete user.profile.lastName

            # If User Displays First Initial
            if user.profile.displayName == 'firstInitLast' || user.profile.displayName == 'firstInitLastInit'

                # Shorten First Name
                user.profile.firstName = user.profile.firstName.charAt(0)

            # If User Displays Last Initial
            if user.profile.displayName == 'firstLastInit' || user.profile.displayName == 'firstInitLastInit'

                # Shorten Last Name
                user.profile.lastName = user.profile.lastName.charAt(0)

            # If User Hides Birthday
            if typeof user.profile.birthdayDisplay != 'undefined' && !user.profile.birthdayDisplay

                # Delete Birthday
                delete user.profile.birthday

    # Publish Public User Fields
    users