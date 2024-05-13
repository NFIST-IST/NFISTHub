import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function DiderotPage() {
    return (
        <>
            <Seo title="Diderot" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="diderot" heading="Diderot" />
            </Page>
        </>
    );
}
