import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function NTNUPage() {
    return (
        <>
            <Seo title="NTNU" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="ntnu" heading="Norwegian University of Science and Technology (NTNU)" />
            </Page>
        </>
    );
}
