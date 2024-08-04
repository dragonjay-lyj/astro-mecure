import { useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useDocSearchKeyboardEvents, DocSearchModal } from '@docsearch/react';
import '@docsearch/css';
import './Search.css';
import { useAtom } from 'jotai';
import { searchModelOpen as searchModelOpenAtom } from '@/store/atoms';

const defaultTranslations = {
  searchBox: {
    resetButtonTitle: 'Clear the input',
    resetButtonAriaLabel: 'Clear the input',
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: 'Cancel',
  },
  startScreen: {
    recentSearchesTitle: 'Recently searched',
    noRecentSearchesText: 'No recent searches',
    saveRecentSearchButtonTitle: 'Add a favorite',
    removeRecentSearchButtonTitle: 'Delete the record',
    favoriteSearchesTitle: 'Collection',
    removeFavoriteSearchButtonTitle: 'Delete a collection',
  },
  errorScreen: {
    titleText: 'Couldnt retrieve search results',
    helpText: 'Please check your internet connection',
  },
  footer: {
    selectText: 'Selected',
    selectKeyAriaLabel: 'Enter key',
    navigateText: 'Move the cursor',
    navigateUpKeyAriaLabel: 'Arrow up',
    navigateDownKeyAriaLabel: 'Arrow down',
    closeText: 'Exit',
    closeKeyAriaLabel: 'Escape key',
    searchByText: 'Search by',
  },
  noResultsScreen: {
    noResultsText: 'Nothing found for:',
    suggestedQueryText: 'Try searching for something else',
    reportMissingResultsText: 'Expecting results?',
    reportMissingResultsLinkText: 'Let us know!',
  },
};

export interface SearchProps {
  appId: string;
  apiKey: string;
  indexName: string;
}

export default function Search({
  appId,
  apiKey,
  indexName,
}: SearchProps) {
  const [searchModalOpen, setSearchModalOpen] = useAtom(searchModelOpenAtom);

  const onOpen = useCallback(() => {
    setSearchModalOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setSearchModalOpen(false);
  }, []);

  useDocSearchKeyboardEvents({
    isOpen: searchModalOpen,
    onOpen,
    onClose,
  });
  
  return (
    <>
      {searchModalOpen && createPortal(
        <DocSearchModal
          appId={appId}
          apiKey={apiKey}
          indexName={indexName}
          placeholder='What are you looking for?'
          translations={defaultTranslations}
          initialScrollY={window.scrollY}
          onClose={onClose}
        />,
        document.body,
      )}
    </>
  )
}

