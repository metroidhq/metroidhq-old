import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import './main.html';

Template.body.helpers({
    countdown: function () {
        var endDate = 'Tue Aug 16 2016 23:59:59 GMT-0700 (PDT)';

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
    }
});

Template.body.onRendered(function () {
    Meteor.call('getRootUrl', function (e,r) {
        if (r === 'http://metroidhq.com') {
            var suffix = '';
        } else if (r === 'http://staging.metroidhq.com') {
            var suffix = '-staging';
        } else {
            var suffix = '-dev';
        }

        $('head').append($(document.createElement('link')).attr('rel', 'shortcut icon').attr('type', 'image/x-icon').attr('href', '/favicon' + suffix + '.ico'));
    });
});