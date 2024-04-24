import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function CircoPage() {
    return (
        <>
            <Seo title="Circo" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="circo" heading="Circo" />
            </Page>
        </>
    );
}
