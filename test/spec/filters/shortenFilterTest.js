describe('ShortenFilter Test', function () {
    var shortenFilter;

    beforeEach(function () {
        module('de.cismet.todoApp.filters');
    });

    beforeEach(
        inject(
            [
                'shortenFilter',
                function (_shortenFilter_) {
                    shortenFilter = _shortenFilter_;
                }
            ]
            )
        );

    it('does nothing when length is lower than limit', function () {
        var filteredText, textToShorten;
        textToShorten ='short text';
        filteredText = shortenFilter(textToShorten, 200);
        
        expect(filteredText).toEqual(textToShorten);
    });
    
    it('does nothing when length is lower than limit', function () {
        var filteredText, textToShorten;
        textToShorten ='a text a little bit longer';
        filteredText = shortenFilter(textToShorten);
        
        expect(filteredText).toEqual(textToShorten);
    });

    it('returns the limited text when length is greater than limit', function () {
        var filteredText, textToShorten;
        textToShorten ='a very very long text that neeeds to be shorten';
        filteredText = shortenFilter(textToShorten, 10);
        
        //filter appends ...
        expect(filteredText.length).toEqual(13);

    });

});

