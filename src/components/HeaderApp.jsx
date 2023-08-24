
import React from 'react'
import SearchNote from './SearchNote';

const HeaderApp = ({onSearch}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
            <h1>HeaderApp | David Nasrulloh</h1>
            <SearchNote onSearch={onSearch} />
        </div>
    )
}

export default HeaderApp