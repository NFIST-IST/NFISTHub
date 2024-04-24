import React from 'react';
import { LegalSection, Page, Seo } from 'dev-nfist-hub';

export default function ImprintPage() {
    return (
        <>
            <Seo title="Imprint" useTitleTemplate={true} noIndex={true} />
            <Page>
                <LegalSection sectionId="imprint" heading="Imprint" />
            </Page>
        </>
    );
}
