import React from 'react';
import {mount} from 'react-mounter';

import Container from '/imports/ui/Container'

FlowRouter.route('/', {
    action: function(params, queryParams) {

        mount(Container, {params, queryParams});

    }
});