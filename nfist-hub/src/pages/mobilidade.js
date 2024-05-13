import React from 'react';
import { MobilidadeSection, Page, Seo } from 'dev-nfist-hub';

export default function MobilidadePage() {
    return (
        <>
            <Seo title="Mobilidade" useTitleTemplate={true} noIndex={true} />
            <Page>
                <MobilidadeSection sectionId="mobilidade" heading="Mobilidade" />
            </Page>
        </>
    );
}
