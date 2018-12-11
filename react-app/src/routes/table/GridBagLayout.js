import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import Toggle from '../news/Box.js';
import Demo1 from './table_league.js';
import Demo2 from './retable_filter.js';

export default class AlignItemsBasics extends Component {
    render() {
        return (
            <Flex  p={1} wrap>
                <Box w={[ 1, 2/3, 3/4 ]}>
                    <Toggle a="تیتر" b="هیچی"/>
                    <Demo1/>
                    <Demo2/>
                </Box>
                <Box order={2} p={[1, 2, 3]} w={[1/2, 1/3, 1/4]}>
                    <Toggle a="تیتر ۲" b="هیچیهیچیهیچیهیچیهیچی"/>
                </Box>
            </Flex>
        );
    }
}