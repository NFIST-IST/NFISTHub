import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function DTUPage() {
    return (
        <>
            <Seo title="DTU" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="dtu" heading="DTU" />
            </Page>
        </>
    );
}
