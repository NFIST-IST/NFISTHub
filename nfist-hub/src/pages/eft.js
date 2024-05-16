import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function EFTPage() {
    return (
        <>
            <Seo title="EFT: Histórias de Alumni" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="eft" heading="EFT: Histórias de Alumni" />
            </Page>
        </>
    );
}
