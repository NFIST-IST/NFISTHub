import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function UTrechtPage() {
    return (
        <>
            <Seo title="UvA" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="uva" heading="Universiteit van Amsterdam" />
            </Page>
        </>
    );
}
