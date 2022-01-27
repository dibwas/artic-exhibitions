import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Head } from 'next/head';
import Header from './Header';


import { Collapse, Popover, Toast, Tooltip, Alert, Modal, Dropdown } from 'bootstrap'

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <Header />
            <main className="container my-5" >
                {children}
            </main>
        </React.Fragment >
    );
}