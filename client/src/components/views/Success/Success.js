import React from 'react'
import { Result, Button } from 'antd';

function Success() {
    return (
        <div style={{marginTop : 50}}>
            <Result
                status="success"
                title="비밀번호 변경 성공!"
                extra={[
                <a href='/login'><Button type="primary" key="console">
                    Login
                </Button>
                </a>
                ]}
  />
        </div>
    )
}

export default Success
