import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function TUEPage() {
    return (
        <>
            <Seo title="TU Eindhoven" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="tu-eindhoven" heading="TU Eindhoven" />
            </Page>
        </>
    );
}
