'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var cx = _interopDefault(require('classnames'));
var React = require('react');
var React__default = _interopDefault(React);
var reactRouterDom = require('react-router-dom');
var uniq = _interopDefault(require('lodash-es/uniq'));
var noop = _interopDefault(require('lodash-es/noop'));
var capitalize = _interopDefault(require('lodash-es/capitalize'));
var reactQuery = require('react-query');
var reactFinalForm = require('react-final-form');
var size = _interopDefault(require('lodash-es/size'));
var debounce = _interopDefault(require('lodash-es/debounce'));

const getColorClasses = color => {
  switch (color) {
    case 'default':
      return 'text-black';
    case 'green':
      return 'text-green-700';
    case 'red':
      return 'text-red-700';
    case 'blue':
      return 'text-blue-700';
  }
};
const getSizeClasses = size => {
  switch (size) {
    case 'sm':
      return 'text-xs';
    case 'default':
      return 'text-sm';
    case 'lg':
      return 'text-base';
  }
};
const Text = _ref => {
  let {
    tag = 'div',
    color = 'default',
    size = 'default',
    children,
    className,
    ...other
  } = _ref;
  const Component = tag;
  const colorClasses = getColorClasses(color);
  const sizeClasses = getSizeClasses(size);
  const resultClasses = cx(sizeClasses, colorClasses, className);
  return /*#__PURE__*/React__default.createElement(Component, Object.assign({
    className: resultClasses
  }, other), children);
};

const Label = props => {
  return /*#__PURE__*/React__default.createElement(Text, {
    tag: "label",
    for: props.for
  }, props.children);
};

const getColorClasses$1 = color => {
  switch (color) {
    case 'default':
      return 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 disabled:text-gray-500';
    case 'green':
      return 'bg-green-50 border-green-500 text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500 disabled:text-green-500';
    case 'red':
      return 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 disabled:text-red-500';
  }
};
const getSizeClasses$1 = size => {
  switch (size) {
    case 'sm':
      return 'text-xs p-2';
    case 'default':
      return 'text-sm p-2.5';
    case 'lg':
      return 'text-md p-4';
  }
};
const Input = _ref => {
  let {
    id,
    label,
    error,
    color = 'default',
    size = 'default',
    type,
    name,
    value,
    onChange,
    className,
    expanded,
    disabled,
    spellCheck
  } = _ref;
  const colorClasses = getColorClasses$1(color);
  const sizeClasses = getSizeClasses$1(size);
  const resultClassName = cx('block border rounded-lg disabled:cursor-default', {
    'w-full': expanded
  }, colorClasses, sizeClasses, className);
  return /*#__PURE__*/React__default.createElement("div", {
    className: cx('flex flex-col gap-1', className)
  }, label && /*#__PURE__*/React__default.createElement(Label, {
    for: id
  }, label), /*#__PURE__*/React__default.createElement("input", {
    id: id,
    value: value,
    type: type,
    name: name,
    className: resultClassName,
    onChange: onChange,
    disabled: disabled,
    spellCheck: spellCheck
  }), error && /*#__PURE__*/React__default.createElement(Text, {
    color: "red"
  }, error));
};

const getColorClasses$2 = color => {
  switch (color) {
    case 'default':
      return 'text-blue-600 focus:ring-blue-500';
    case 'green':
      return 'text-green-600 focus:ring-green-500';
    case 'red':
      return 'text-red-600 focus:ring-red-500';
  }
};
const getSizeClasses$2 = size => {
  switch (size) {
    case 'sm':
      return 'w-3 h-3';
    case 'default':
      return 'w-4 h-4';
    case 'lg':
      return 'w-5 h-5';
  }
};
const Checkbox = _ref => {
  let {
    id,
    label,
    error,
    color = 'default',
    size = 'default',
    name,
    checked = false,
    onChange,
    className,
    disabled
  } = _ref;
  const colorClasses = getColorClasses$2(color);
  const sizeClasses = getSizeClasses$2(size);
  const resultClassName = cx('rounded focus:ring-2 bg-gray-100 border-gray-300', colorClasses, sizeClasses, className);
  return /*#__PURE__*/React__default.createElement("div", {
    className: cx('flex flex-col gap-1', className)
  }, label && /*#__PURE__*/React__default.createElement(Label, {
    for: id
  }, label), /*#__PURE__*/React__default.createElement("input", {
    id: id,
    checked: checked,
    type: "checkbox",
    name: name,
    className: resultClassName,
    onChange: onChange,
    disabled: disabled
  }), error && /*#__PURE__*/React__default.createElement(Text, {
    color: "red"
  }, error));
};

const getSizeClasses$3 = size => {
  switch (size) {
    case 'sm':
      return 'text-xs p-2';
    case 'default':
      return 'text-sm p-2.5';
    case 'lg':
      return 'text-md p-4';
  }
};
const NOT_SELECTED = {
  value: '',
  label: '-- Not Selected --'
};
const Select = _ref => {
  let {
    id,
    label,
    error,
    name,
    value,
    options,
    onChange,
    className,
    size = 'default',
    expanded,
    disabled
  } = _ref;
  const resultOptions = [NOT_SELECTED, ...options];
  const sizeClasses = getSizeClasses$3(size);
  const resultClassName = cx('bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block disabled:cursor-default disabled:text-gray-500', sizeClasses, {
    'w-full': expanded
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: cx('flex flex-col gap-1', className)
  }, label && /*#__PURE__*/React__default.createElement(Label, {
    for: id
  }, label), /*#__PURE__*/React__default.createElement("select", {
    id: id,
    name: name,
    value: value,
    onChange: onChange,
    className: resultClassName,
    disabled: disabled
  }, resultOptions.map(option => {
    return /*#__PURE__*/React__default.createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  })), error && /*#__PURE__*/React__default.createElement(Text, {
    color: "red"
  }, error));
};

const getSizeClasses$4 = size => {
  switch (size) {
    case 'sm':
      return 'text-xs p-2';
    case 'default':
      return 'text-sm p-2.5';
    case 'lg':
      return 'text-md p-4';
  }
};
const MultiSelect = _ref => {
  let {
    id,
    label,
    error,
    name,
    value,
    options,
    onChange,
    visibleNumber,
    className,
    size = 'default',
    expanded,
    disabled
  } = _ref;
  const sizeClasses = getSizeClasses$4(size);
  const resultClassName = cx('bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block disabled:cursor-default', sizeClasses, {
    'text-gray-900': disabled,
    'w-full': expanded
  }, className);
  return /*#__PURE__*/React__default.createElement("div", {
    className: cx('flex flex-col gap-1', className)
  }, label && /*#__PURE__*/React__default.createElement(Label, {
    for: id
  }, label), /*#__PURE__*/React__default.createElement("select", {
    id: id,
    multiple: true,
    size: visibleNumber,
    name: name,
    value: value,
    onChange: onChange,
    className: resultClassName,
    disabled: disabled
  }, options.map(option => {
    return /*#__PURE__*/React__default.createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  })), error && /*#__PURE__*/React__default.createElement(Text, {
    color: "red"
  }, error));
};

const getColorClasses$3 = (color, outline) => {
  if (outline) {
    switch (color) {
      case 'default':
        return 'text-blue-700 hover:text-white border-blue-700 hover:bg-blue-800 focus:ring-blue-300';
      case 'dark':
        return 'text-gray-900 hover:text-white border-gray-800 hover:bg-gray-900 focus:ring-gray-300';
      case 'green':
        return 'text-green-700 hover:text-white border-green-700 hover:bg-green-800 focus:ring-green-300';
      case 'red':
        return 'text-red-700 hover:text-white border-red-700 hover:bg-red-800 focus:ring-red-300';
      case 'yellow':
        return 'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300';
      case 'purple':
        return 'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-purple-300';
    }
  }
  switch (color) {
    case 'default':
      return 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 disabled:bg-blue-500';
    case 'dark':
      return 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 disabled:bg-gray-500';
    case 'green':
      return 'text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 disabled:bg-green-500';
    case 'red':
      return 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 disabled:bg-red-500';
    case 'yellow':
      return 'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 disabled:bg-yellow-200';
    case 'purple':
      return 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 disabled:bg-purple-500';
  }
};
const getSizeClasses$5 = size => {
  switch (size) {
    case 'xs':
      return 'px-3 py-2 text-xs';
    case 'sm':
      return 'px-3 py-2 text-sm';
    case 'default':
      return 'px-5 py-2.5 text-sm';
    case 'lg':
      return 'px-5 py-3 text-base';
    case 'xl':
      return 'px-6 py-3.5 text-base';
  }
};
const Button = _ref => {
  let {
    onSubmit,
    onClick,
    children,
    outline = false,
    size = 'default',
    color = 'default',
    type,
    className,
    disabled,
    expanded
  } = _ref;
  const colorClasses = getColorClasses$3(color, outline);
  const sizeClasses = getSizeClasses$5(size);
  const resultClassName = cx('focus:ring-4 font-medium rounded-lg focus:outline-none text-center disabled:cursor-default', {
    'w-full': expanded,
    'w-fit': !expanded
  }, colorClasses, sizeClasses, className);
  return /*#__PURE__*/React__default.createElement("button", {
    onSubmit: onSubmit,
    onClick: onClick,
    className: resultClassName,
    type: type,
    disabled: disabled
  }, children);
};

const getSizeClasses$6 = size => {
  switch (size) {
    case 'h1':
      return 'text-6xl';
    case 'h2':
      return 'text-5xl';
    case 'h3':
      return 'text-4xl';
    case 'h4':
      return 'text-3xl';
    case 'h5':
      return 'text-2xl';
    case 'h6':
      return 'text-xl';
  }
};
const Header = _ref => {
  let {
    size,
    children,
    className
  } = _ref;
  const Component = size;
  const sizeClasses = getSizeClasses$6(size);
  const resultClasses = cx(sizeClasses, className);
  return /*#__PURE__*/React__default.createElement(Component, {
    className: resultClasses
  }, children);
};
Header.H1 = _ref2 => {
  let {
    children,
    className
  } = _ref2;
  return /*#__PURE__*/React__default.createElement(Header, {
    size: 'h1',
    className: className
  }, children);
};
Header.H2 = _ref3 => {
  let {
    children,
    className
  } = _ref3;
  return /*#__PURE__*/React__default.createElement(Header, {
    size: 'h2',
    className: className
  }, children);
};
Header.H3 = _ref4 => {
  let {
    children,
    className
  } = _ref4;
  return /*#__PURE__*/React__default.createElement(Header, {
    size: 'h3',
    className: className
  }, children);
};
Header.H4 = _ref5 => {
  let {
    children,
    className
  } = _ref5;
  return /*#__PURE__*/React__default.createElement(Header, {
    size: 'h4',
    className: className
  }, children);
};
Header.H5 = _ref6 => {
  let {
    children,
    className
  } = _ref6;
  return /*#__PURE__*/React__default.createElement(Header, {
    size: 'h5',
    className: className
  }, children);
};
Header.H6 = _ref7 => {
  let {
    children,
    className
  } = _ref7;
  return /*#__PURE__*/React__default.createElement(Header, {
    size: 'h6',
    className: className
  }, children);
};

const Spinner = () => {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "fixed w-screen h-screen z-[1000] top-0 left-0 bg-backdrop bg-opacity-50 w-full h-full flex justify-center items-center"
  }, /*#__PURE__*/React__default.createElement("svg", {
    "aria-hidden": "true",
    className: "mr-2 w-8 h-8 text-gray-200 animate-spin fill-amber-500",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
    fill: "currentColor"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
    fill: "currentFill"
  })));
};

const Table = _ref => {
  let {
    headers,
    rows
  } = _ref;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "relative overflow-x-auto"
  }, rows.length > 0 && /*#__PURE__*/React__default.createElement("table", {
    className: "w-full text-sm text-left text-gray-500"
  }, /*#__PURE__*/React__default.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-gray-50"
  }, /*#__PURE__*/React__default.createElement("tr", null, headers.map(header => /*#__PURE__*/React__default.createElement("th", {
    key: header.key,
    scope: "col",
    className: "px-6 py-3"
  }, header.value)))), /*#__PURE__*/React__default.createElement("tbody", null, rows.map(row => {
    return /*#__PURE__*/React__default.createElement("tr", {
      key: row.key,
      className: "bg-white border-b"
    }, /*#__PURE__*/React__default.createElement("th", {
      scope: "row",
      className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
    }, row.columns[headers[0].key]), headers.slice(1).map(header => /*#__PURE__*/React__default.createElement("td", {
      key: header.key,
      className: "px-6 py-4"
    }, row.columns[header.key])));
  }))), rows.length === 0 && /*#__PURE__*/React__default.createElement(Text, null, "No items"));
};

const getClassName = type => {
  switch (type) {
    case 'info':
      return 'text-blue-800 bg-blue-50 border-blue-300 ';
    case 'danger':
      return 'text-red-800 border-red-300 bg-red-50';
    case 'success':
      return 'text-green-800 border-green-300 bg-green-50';
    case 'warning':
      return 'text-yellow-800 border-yellow-300 bg-yellow-50';
    case 'dark':
      return 'text-gray-800 border-gray-300 bg-gray-50';
  }
};
const Alert = _ref => {
  let {
    type,
    children,
    className
  } = _ref;
  const resultClassName = cx(getClassName(type), 'p-4 text-sm rounded-lg border', className);
  return /*#__PURE__*/React__default.createElement("div", {
    className: resultClassName,
    role: "alert"
  }, children);
};

const StandardLink = _ref => {
  let {
    to,
    children,
    className
  } = _ref;
  return /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
    to: to,
    className: className
  }, /*#__PURE__*/React__default.createElement(Text, {
    color: "blue"
  }, children));
};

const EditLink = _ref => {
  let {
    to
  } = _ref;
  return /*#__PURE__*/React__default.createElement(StandardLink, {
    to: to,
    className: "text-right"
  }, "Edit");
};

const Toaster = _ref => {
  let {
    events,
    className
  } = _ref;
  return /*#__PURE__*/React__default.createElement("div", {
    className: cx('flex flex-col gap-4', className)
  }, events.map(event => {
    return /*#__PURE__*/React__default.createElement(Alert, {
      type: event.type,
      key: event.key,
      className: "z-100"
    }, event.message);
  }));
};



var index = {
  __proto__: null,
  Input: Input,
  Checkbox: Checkbox,
  Select: Select,
  MultiSelect: MultiSelect,
  Button: Button,
  Header: Header,
  Label: Label,
  Spinner: Spinner,
  Table: Table,
  Text: Text,
  Alert: Alert,
  StandardLink: StandardLink,
  EditLink: EditLink,
  Toaster: Toaster
};

const createUserProvider = useUserQuery => {
  const UserContext = /*#__PURE__*/React__default.createContext(null);
  const UserProvider = _ref => {
    let {
      children
    } = _ref;
    const [claims, setClaims] = React.useState(null);
    useUserQuery({
      onSuccess: setClaims
    });
    return /*#__PURE__*/React__default.createElement(UserContext.Provider, {
      value: claims
    }, claims === null ? null : children);
  };
  UserProvider.useUser = () => {
    const user = React.useContext(UserContext);
    if (!user) {
      throw new Error('User is not defined');
    }
    return user;
  };
  return UserProvider;
};

const ToasterContext = /*#__PURE__*/React__default.createContext({
  events: [],
  add: () => {}
});
const ToasterProvider = _ref => {
  let {
    children
  } = _ref;
  const [events, setEvents] = React.useState([]);
  const remove = eventKey => {
    console.log('remove', eventKey);
    setEvents(events => events.filter(_ref2 => {
      let {
        key
      } = _ref2;
      return key !== eventKey;
    }));
  };
  const add = React.useCallback(event => {
    const key = Date.now().toString();
    const timeoutId = setTimeout(() => remove(key), 5000);
    setEvents(events => [...events, {
      ...event,
      timeoutId,
      key
    }]);
  }, [setEvents]);
  React.useEffect(() => {
    return () => {
      events.forEach(_ref3 => {
        let {
          timeoutId
        } = _ref3;
        return clearTimeout(timeoutId);
      });
    };
  }, [events]);
  const contextValue = {
    events,
    add
  };
  return /*#__PURE__*/React__default.createElement(ToasterContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "fixed w-full pt-4 z-[1001]"
  }, /*#__PURE__*/React__default.createElement(Toaster, {
    events: events,
    className: "w-96 mx-auto"
  })), children);
};
ToasterProvider.useToasterMessageAdder = () => {
  const context = React.useContext(ToasterContext);
  return context.add;
};

const WaitingContext = /*#__PURE__*/React__default.createContext({
  isWaiting: 0,
  addWaiter: noop,
  removeWaiter: noop
});
const WaitingProvider = _ref => {
  let {
    children
  } = _ref;
  const [waiters, setWaiters] = React.useState([]);
  const addWaiter = React.useCallback(name => setWaiters(prev => uniq([...prev, name])), []);
  const removeWaiter = React.useCallback(name => setWaiters(prev => prev.filter(item => item !== name)), []);
  const isWaiting = waiters.length;
  const contextValue = {
    isWaiting,
    addWaiter,
    removeWaiter
  };
  return /*#__PURE__*/React__default.createElement(WaitingContext.Provider, {
    value: contextValue
  }, children);
};
WaitingProvider.useIsWaiting = () => {
  const context = React.useContext(WaitingContext);
  return Boolean(context.isWaiting);
};
WaitingProvider.useWaitingMutation = () => {
  const context = React.useContext(WaitingContext);
  return {
    addWaiter: context.addWaiter,
    removeWaiter: context.removeWaiter
  };
};



var index$1 = {
  __proto__: null,
  createUserProvider: createUserProvider,
  ToasterProvider: ToasterProvider,
  WaitingProvider: WaitingProvider
};

class CrudApi {
  constructor(entityName, axiosInstance) {
    this.entityName = entityName;
    this.axiosInstance = axiosInstance;
  }
  async list(params) {
    const result = await this.axiosInstance.get(`/api/${this.entityName}`, {
      params: {
        ...params,
        filters: params.filters ? JSON.stringify(params.filters) : undefined,
        ordering: params.ordering ? JSON.stringify(params.ordering) : undefined
      }
    });
    return result.data;
  }
  async item(id) {
    const result = await this.axiosInstance.get(`/api/${this.entityName}/${id}`);
    return result.data;
  }
  async create(params) {
    const result = await this.axiosInstance.post(`/api/${this.entityName}`, params);
    return result.data;
  }
  async update(params) {
    const result = await this.axiosInstance.patch(`/api/${this.entityName}/${params.id}`, params);
    return result.data;
  }
  async remove(id) {
    await this.axiosInstance.delete(`/api/${this.entityName}/${id}`);
  }
}

class CrudHooks {
  constructor(entityName, crudApi) {
    this.entityName = entityName;
    this.crudApi = crudApi;
  }
  useCreateMutation() {
    const add = ToasterProvider.useToasterMessageAdder();
    return reactQuery.useMutation(params => this.crudApi.create(params), {
      onSuccess: () => {
        add({
          message: `${capitalize(this.entityName)} added`,
          type: 'success'
        });
      }
    });
  }
  useUpdateMutation() {
    const add = ToasterProvider.useToasterMessageAdder();
    return reactQuery.useMutation(params => this.crudApi.update(params), {
      onSuccess: () => {
        add({
          message: `${capitalize(this.entityName)} updated`,
          type: 'success'
        });
      }
    });
  }
  useRemoveMutation() {
    const add = ToasterProvider.useToasterMessageAdder();
    return reactQuery.useMutation(id => this.crudApi.remove(id), {
      onSuccess: () => {
        add({
          message: `${capitalize(this.entityName)} removed`,
          type: 'success'
        });
      }
    });
  }
  useItemQuery(id, options) {
    return reactQuery.useQuery([this.entityName, 'item', id], () => this.crudApi.item(id), options);
  }
  useListQuery(params, options) {
    if (params === void 0) {
      params = {};
    }
    return reactQuery.useQuery([this.entityName, 'list', params], () => this.crudApi.list(params), options);
  }
  usePaginatedQuery(params, options) {
    if (params === void 0) {
      params = {};
    }
    return reactQuery.useInfiniteQuery({
      queryKey: [this.entityName, 'paginatedList', params],
      queryFn: _ref => {
        let {
          pageParam: cursor
        } = _ref;
        return this.crudApi.list({
          ...params,
          cursor
        });
      },
      getNextPageParam: lastPage => lastPage.nextCursor,
      ...options
    });
  }
}



var index$2 = {
  __proto__: null,
  CrudApi: CrudApi,
  CrudHooks: CrudHooks
};



var types = {
  __proto__: null
};

const SelectField = _ref => {
  let {
    id,
    label,
    name,
    options,
    disabled,
    expanded,
    className
  } = _ref;
  return /*#__PURE__*/React__default.createElement(reactFinalForm.Field, {
    name: name,
    type: "select",
    render: _ref2 => {
      let {
        input
      } = _ref2;
      return /*#__PURE__*/React__default.createElement(Select, Object.assign({}, input, {
        id: id,
        label: label,
        options: options,
        disabled: disabled,
        expanded: expanded,
        className: className
      }));
    }
  });
};

const MultiSelectField = _ref => {
  let {
    id,
    initialValue,
    label,
    name,
    options,
    disabled,
    expanded,
    className,
    visibleNumber
  } = _ref;
  return /*#__PURE__*/React__default.createElement(reactFinalForm.Field, {
    initialValue: initialValue,
    name: name,
    type: "select",
    render: _ref2 => {
      let {
        input
      } = _ref2;
      return /*#__PURE__*/React__default.createElement(MultiSelect, Object.assign({}, input, {
        id: id,
        label: label,
        options: options,
        disabled: disabled,
        expanded: expanded,
        className: className,
        visibleNumber: visibleNumber
      }));
    }
  });
};

const InputField = _ref => {
  let {
    id,
    label,
    name,
    type,
    disabled,
    expanded,
    className,
    spellCheck
  } = _ref;
  return /*#__PURE__*/React__default.createElement(reactFinalForm.Field, {
    type: type,
    name: name,
    render: _ref2 => {
      let {
        input
      } = _ref2;
      return /*#__PURE__*/React__default.createElement(Input, Object.assign({}, input, {
        id: id,
        label: label,
        disabled: disabled,
        expanded: expanded,
        className: className,
        spellCheck: spellCheck
      }));
    }
  });
};

const CheckboxField = _ref => {
  let {
    id,
    label,
    name,
    disabled,
    className
  } = _ref;
  return /*#__PURE__*/React__default.createElement(reactFinalForm.Field, {
    type: "checkbox",
    name: name,
    render: _ref2 => {
      let {
        input
      } = _ref2;
      return /*#__PURE__*/React__default.createElement(Checkbox, Object.assign({}, input, {
        id: id,
        label: label,
        disabled: disabled,
        className: className
      }));
    }
  });
};



var index$3 = {
  __proto__: null,
  SelectField: SelectField,
  MultiSelectField: MultiSelectField,
  InputField: InputField,
  CheckboxField: CheckboxField
};

const useInfinitiveLoading = _ref => {
  let {
    limit = 50,
    ordering,
    filters,
    usePaginatedQuery
  } = _ref;
  const paginatedQuery = usePaginatedQuery({
    limit,
    ordering,
    filters
  });
  React.useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
        return;
      }
      if (!paginatedQuery.hasNextPage) {
        return;
      }
      paginatedQuery.fetchNextPage();
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [paginatedQuery]);
  const data = paginatedQuery.data ? paginatedQuery.data.pages.reduce((result, _ref2) => {
    let {
      list
    } = _ref2;
    result.push(...list);
    return result;
  }, []) : null;
  return {
    data,
    quantity: size(data)
  };
};



var index$4 = {
  __proto__: null,
  useInfinitiveLoading: useInfinitiveLoading
};

exports.Components = index;
exports.Fields = index$3;
exports.Hooks = index$4;
exports.Providers = index$1;
exports.Types = types;
exports.Utils = index$2;
//# sourceMappingURL=front-utils.cjs.development.js.map
