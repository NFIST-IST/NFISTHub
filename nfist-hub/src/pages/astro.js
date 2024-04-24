import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function AstroPage() {
    return (
        <>
            <Seo title="Astro" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="astro" heading="Astro" />
            </Page>
        </>
    );
}
