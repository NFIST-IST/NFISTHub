import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function FUPage() {
    return (
        <>
            <Seo title="FU" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="fuberlin" heading="Freie Universtät von Berlin" />
            </Page>
        </>
    );
}
