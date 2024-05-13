import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function PadovaPage() {
    return (
        <>
            <Seo title="Padova" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="padova" heading="Padova" />
            </Page>
        </>
    );
}
