import React, { useContext } from 'react'
import { Icon } from 'react-materialize'
import { ThemeContext } from './ThemeContext'

export default function ModelCase({ setIsOpen, film }) {
    const { theme } = useContext(ThemeContext)
    return (
        <div className="modal-show" onClick={() => setIsOpen(false)}>
            <div id="modal1" className="modal" style={{ display: 'block', top: '40%' }}>
                <div style={{ backgroundColor: theme.backgroundColor, float: 'right', padding: '10px' }} className="modal-header">
                    <a className="modal-close red-text"><Icon style={{ color: '#ff9800' }}>close</Icon></a>
                </div>
                <div style={{ backgroundColor: theme.backgroundColor }} className="modal-content">
                    <p><iframe width="100%" height="400px" src={film.trailer} title={film.name} frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </p>
                </div>
            </div>
        </div>
    )
}
