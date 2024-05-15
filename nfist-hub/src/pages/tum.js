import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function TUMPage() {
    return (
        <>
            <Seo title="TUM" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="tum" heading="Technische Universität von Munchen (TUM)" />
            </Page>
        </>
    );
}
