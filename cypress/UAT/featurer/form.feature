Feature: simple form
Scenario: to veryfy thr form is working for all mandatory fields
Given open browzer enter simplefrom url
When user enter firstname, lastname, email, contact
And user clicks on submit
Then Successful alert should be displayed with a massage.

