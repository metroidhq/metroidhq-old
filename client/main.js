import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import './main.html';

Template.body.helpers({
    countdown () {
        var endDate = 'Tue Aug 16 2016 12:00:00 GMT-0700 (PDT)';

        function pad(num, size) {
            var s = "0" + num;
            return s.substr(s.length-size);
        }

        Session.set('timeleft', countdown(
            null,
            new Date(endDate),
            (countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS)
        ));


        Meteor.setTimeout(function () {
            Session.set('timeleft', countdown(
                null,
                new Date(endDate),
                (countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS)
            ));
        }, 1000);

        return pad(Session.get('timeleft').days, 2) + ':' + pad(Session.get('timeleft').hours, 2) + ':' + pad(Session.get('timeleft').minutes, 2) + ':' + pad(Session.get('timeleft').seconds, 2);
    },
});