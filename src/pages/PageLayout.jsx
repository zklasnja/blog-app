import React from "react";

export default function PageLayout({ header, footer, body }) {
    return (
        <div>
            {header}
            {body}
            {footer}
        </div>
    )
}