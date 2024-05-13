import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function UTrechtPage() {
    return (
        <>
            <Seo title="UTrecht" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="utrecht" heading="UTrecht" />
            </Page>
        </>
    );
}
