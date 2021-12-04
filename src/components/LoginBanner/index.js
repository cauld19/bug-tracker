import React from 'react';

import {Wrapper, Content, Box} from './LoginBanner.styles'; 

const LoginBanner = () => (
    
    <Wrapper>
        <Box>
            <h1>Log in</h1>
            <Content>
                <input
                    type='text'
                    placeholder='Email...'
                />
                <input
                    type='text'
                    placeholder='Password...'
                />
            </Content>
            
        </Box>
    </Wrapper>
)

export default LoginBanner;