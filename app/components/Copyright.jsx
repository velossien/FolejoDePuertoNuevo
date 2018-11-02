import React, { Component } from 'react';

export default function Copyright() {
    return (
        <div className="copyright">
            &copy; {new Date().getFullYear()} Grimm
        </div>
    )
}