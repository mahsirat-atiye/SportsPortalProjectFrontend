import React, {Component} from 'react';
import Tablee from './table/table_league.js';
import {Flex, Box} from 'reflexbox';

export default class Leauge_x extends Component {
    render() {
        return (
            <Flex  p={1} wrap>
                <Box w={1}>
                    <Tablee/>
                </Box>
            </Flex>
        );
    }
}